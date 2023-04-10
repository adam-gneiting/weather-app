import { Coords, CurrentWeatherData, IWeatherService, RequestOptions } from './types';

const BASE_URL_V2_5 = 'https://api.openweathermap.org/data/2.5/weather';
const BASE_URL_V3 = 'https://api.openweathermap.org/data/3.0';

class WeatherService implements IWeatherService {
  async getCurrentWeatherDataV2_5(coords: Coords): Promise<any> {
    let path = `${BASE_URL_V2_5}?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
    return (await fetch(path)).json();
  }

  // TODO: Unsuppported on current token, but properly structured for new API.
  async getCurrentWeatherDataV3(coords: Coords, options?: RequestOptions): Promise<CurrentWeatherData> {
    let path = `${BASE_URL_V3}/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
    options?.exclude && (path += `&exclude=${options.exclude.join(',')}`);
    options?.units && (path += `&units=${options.units}`);

    return (await fetch(path)).json();
  }
}

export const weatherService = new WeatherService();