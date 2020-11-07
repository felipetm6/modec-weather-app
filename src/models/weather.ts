type Coordinates = {
  lat: number;
  lon: number;
};

type MainData = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Wind = {
  deg: number;
  speed: number;
};

type System = {
  country: string;
};

type Clouds = {
  all: number;
};

export type WeatherIconCode =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n';

type Weather = {
  description: string;
  icon: WeatherIconCode;
  id: number;
  main: string;
};

export type OpenWeatherData = {
  clouds: Clouds;
  coord: Coordinates;
  dt: number;
  id: number;
  main: MainData;
  name: string;
  rain?: any;
  snow?: any;
  sys: System;
  weather: Weather[];
  wind: Wind;
};
