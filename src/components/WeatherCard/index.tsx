import React, { FC } from 'react';
import { WeatherCardStyled as Styled } from './styled';
import { ArrowDownward, ArrowUpward } from 'utils/images';
import { WeatherIconCode } from 'models/weather';
import getWeatherIcon from 'utils/getWeatherIcon';

type Props = {
  currentTemperature: number;
  description: string;
  humidity: number;
  iconCode: WeatherIconCode;
  name: string;
  pressure: number;
  temperatureMaximum: number;
  temperatureMinimum: number;
  thermalSensation: number;
  windSpeed: number;
};

const WeatherCard: FC<Props> = ({
  currentTemperature,
  description,
  humidity,
  iconCode,
  name,
  pressure,
  temperatureMaximum,
  temperatureMinimum,
  thermalSensation,
  windSpeed,
}) => {
  return (
    <Styled.Wrapper>
      <p>Current weather on</p>
      <Styled.LocationName>{name}</Styled.LocationName>
      <Styled.MainSection>
        <Styled.TemperatureIcon>
          {getWeatherIcon(iconCode)}
        </Styled.TemperatureIcon>
        <Styled.TemperatureSection>
          <Styled.CurrentTemperature>
            {currentTemperature.toFixed(0)}°
          </Styled.CurrentTemperature>
          <Styled.TemperatureForecast>
            <p>
              <ArrowUpward />
              {temperatureMaximum.toFixed(0)}°
            </p>
            <p>
              <ArrowDownward />
              {temperatureMinimum.toFixed(0)}°
            </p>
          </Styled.TemperatureForecast>
        </Styled.TemperatureSection>
        <p>{description}</p>
      </Styled.MainSection>
      <Styled.AdditionalData>
        <Styled.AdditionalDataEntry>
          <p>Sensation</p>
          <p>{thermalSensation.toFixed(0)}°</p>
        </Styled.AdditionalDataEntry>
        <Styled.AdditionalDataEntry>
          <p>Humidity</p>
          <p>{humidity}%</p>
        </Styled.AdditionalDataEntry>
        <Styled.AdditionalDataEntry>
          <p>Pressure</p>
          <p>{pressure} hPa</p>
        </Styled.AdditionalDataEntry>
        <Styled.AdditionalDataEntry>
          <p>Wind Speed</p>
          <p>{windSpeed} km/h</p>
        </Styled.AdditionalDataEntry>
      </Styled.AdditionalData>
    </Styled.Wrapper>
  );
};

export default WeatherCard;
