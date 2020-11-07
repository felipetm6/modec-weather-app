import React, { FC, useCallback, useEffect, useState } from 'react';
import { getForecastByCoordinates } from 'api/weather';
import { OpenWeatherData } from '../../models/weather';
import WeatherCard from '../../components/WeatherCard';

const Main: FC = () => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [forecastList, setForecastList] = useState<OpenWeatherData[]>([]);

  const getForecastByNavigator = useCallback(async (position: Position) => {
    const { coords } = position;

    const { list } = await getForecastByCoordinates(
      coords.latitude,
      coords.longitude,
    );

    console.log(list);

    setCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
    setForecastList([...list]);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getForecastByNavigator);
    } else {
      console.error('Duh');
    }
  }, [getForecastByNavigator]);

  console.log(coordinates);

  return (
    <div>
      {forecastList.map((item, i) => (
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
    </div>
  );
};

export default Main;
