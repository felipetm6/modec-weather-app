import React, { FC, useEffect, useState } from 'react';
import { MainStyled as Styled } from './styled';
import { getForecastByCoordinates } from 'api/weather';
import { OpenWeatherData } from 'models/weather';
import WeatherCard from 'components/WeatherCard';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { DEFAULT_COORDINATES } from 'utils/constants';
import { AppIcon } from 'utils/images';
import Loader from '../../components/Loader';

type LatLng = {
  lat: number;
  lng: number;
};

const Main: FC = () => {
  const [coordinates, setCoordinates] = useState<LatLng | null>(null);
  const [forecastList, setForecastList] = useState<OpenWeatherData[]>([]);
  const [
    selectedCityForecast,
    setSelectedCityForecast,
  ] = useState<OpenWeatherData | null>(null);

  const getForecastByNavigator = async () => {
    if (!coordinates) {
      return;
    }

    const { list } = await getForecastByCoordinates(
      coordinates.lat,
      coordinates.lng,
    );

    setSelectedCityForecast(list[0]);
    setForecastList([...list.slice(1)]);
  };

  const updateCoordinates = (event: {
    latLng: { lat(): number; lng(): number };
  }) => {
    const { latLng } = event;

    setCoordinates({ lat: latLng.lat(), lng: latLng.lng() });
  };

  const setAsSelectedCity = (forecast: OpenWeatherData) => () => {
    const {
      coord: { lat, lon: lng },
    } = forecast;

    if (selectedCityForecast) {
      setForecastList([
        { ...selectedCityForecast },
        ...forecastList.filter((item) => item.name !== forecast.name),
      ]);
    }

    setCoordinates({ lat, lng });
    setSelectedCityForecast(forecast);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setCoordinates({ lat: coords.latitude, lng: coords.longitude });
      });
    } else {
      console.error('Duh');
    }
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <AppIcon />
        Awesome Weather App
      </Styled.Title>
      <Styled.Subtitle>
        Select a place on the map and click Search to check nearby forecasts!
      </Styled.Subtitle>

      <Styled.MainArea>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY || ''}
        >
          <GoogleMap
            center={coordinates || DEFAULT_COORDINATES}
            clickableIcons={false}
            onClick={updateCoordinates}
            options={{
              disableDefaultUI: true,
              disableDoubleClickZoom: true,
            }}
            zoom={10}
          >
            {coordinates && (
              <Marker position={coordinates || DEFAULT_COORDINATES} />
            )}
          </GoogleMap>
        </LoadScript>

        <div>
          {selectedCityForecast ? (
            <WeatherCard
              {...selectedCityForecast.main}
              name={selectedCityForecast.name}
              currentTemperature={selectedCityForecast.main.temp}
              description={selectedCityForecast.weather[0].description}
              iconCode={selectedCityForecast.weather[0].icon}
              temperatureMaximum={selectedCityForecast.main.temp_max}
              temperatureMinimum={selectedCityForecast.main.temp_min}
              thermalSensation={selectedCityForecast.main.feels_like}
              windSpeed={selectedCityForecast.wind.speed}
            />
          ) : (
            <Styled.BlankCard>
              <Loader />
            </Styled.BlankCard>
          )}
          <Styled.SearchButton
            onClick={getForecastByNavigator}
            disabled={!coordinates}
          >
            Search
          </Styled.SearchButton>
        </div>
      </Styled.MainArea>

      <Styled.CitiesContainer>
        {forecastList.length ? (
          <p>Forecasts in this region</p>
        ) : (
          <p>Waiting for city selection...</p>
        )}
        {forecastList.map((item, i) => (
          <WeatherCard
            {...item.main}
            onClick={setAsSelectedCity(item)}
            name={item.name}
            currentTemperature={item.main.temp}
            description={item.weather[0].description}
            iconCode={item.weather[0].icon}
            temperatureMaximum={item.main.temp_max}
            temperatureMinimum={item.main.temp_min}
            thermalSensation={item.main.feels_like}
            windSpeed={item.wind.speed}
            key={i}
          />
        ))}
      </Styled.CitiesContainer>
    </Styled.Wrapper>
  );
};

export default Main;
