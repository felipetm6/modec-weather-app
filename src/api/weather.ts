import { OpenWeatherData } from 'models/weather';

const createOpenWeatherRequest = async (
  query: string,
): Promise<BulkOpenWeatherResponse> =>
  await fetch(
    `http://api.openweathermap.org/data/2.5/${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  ).then((response) => response.json());

type BulkOpenWeatherResponse = {
  cod: string;
  count: number;
  message: string;
  list: OpenWeatherData[];
};

export const getForecastByCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<BulkOpenWeatherResponse> =>
  await createOpenWeatherRequest(
    `find?lat=${latitude}&lon=${longitude}&cnt=15`,
  );
