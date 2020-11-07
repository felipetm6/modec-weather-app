/// <reference types="googlemaps" />

import React, { FC, useEffect, useState } from 'react';
import { MainStyled as Styled } from './styled';
import { getForecastByCoordinates } from 'api/weather';
import { OpenWeatherData } from 'models/weather';
import WeatherCard from 'components/WeatherCard';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { DEFAULT_COORDINATES } from 'utils/constants';

type LatLng = {
  lat: number;
  lng: number;
};

const Main: FC = () => {
  const [coordinates, setCoordinates] = useState<LatLng | null>(null);
  const [forecastList, setForecastList] = useState<OpenWeatherData[]>([]);

  const getForecastByNavigator = async () => {
    if (!coordinates) {
      return;
    }

    const { list } = await getForecastByCoordinates(
      coordinates.lat,
      coordinates.lng,
    );

    setForecastList([...list]);
  };

  const updateCoordinates = (event: google.maps.MouseEvent) => {
    const { latLng } = event;

    setCoordinates({ lat: latLng.lat(), lng: latLng.lng() });
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
  }, [getForecastByNavigator]);

  return (
    <Styled.Wrapper>
      <Styled.Title>Awesome Weather App</Styled.Title>
      <Styled.Subtitle>
        Select a place on the map and click Search to check nearby forecasts!
      </Styled.Subtitle>

      <Styled.MainArea>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY || ''}
        >
          <GoogleMap
            mapContainerStyle={{
              height: '400px',
              width: '400px',
            }}
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
            {coordinates && (
              <Styled.SearchButton onClick={getForecastByNavigator}>
                Search
              </Styled.SearchButton>
            )}
          </GoogleMap>
        </LoadScript>

        {forecastList[0] && (
          <WeatherCard
            {...forecastList[0].main}
            name={forecastList[0].name}
            currentTemperature={forecastList[0].main.temp}
            description={forecastList[0].weather[0].description}
            iconCode={forecastList[0].weather[0].icon}
            temperatureMaximum={forecastList[0].main.temp_max}
            temperatureMinimum={forecastList[0].main.temp_min}
            thermalSensation={forecastList[0].main.feels_like}
            windSpeed={forecastList[0].wind.speed}
          />
        )}
      </Styled.MainArea>

      {forecastList.slice(1).map((item, i) => (
        <WeatherCard
          {...item.main}
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
    </Styled.Wrapper>
  );
};

export default Main;
