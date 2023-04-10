export type Coords = {
  lat: number;
  lon: number;
};

export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MinutelyData = {
  dt: number;
  precipitation: number;
}

export type HourlyData = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  pop: number;
  rain: {
    "1h": number;
  };
  snow: {
    "1h": number;
  };
  weather: WeatherCondition;
};

export type DailyTempSpread = {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min?: number;
  max?: number;
};

export type DailyData = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number | DailyTempSpread;
  feels_like: number | DailyTempSpread;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  pop?: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  rain: number;
  snow: number;
  weather: WeatherCondition[];
};

export type AlertData = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

export type CurrentWeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current?: DailyData;
  minutely?: MinutelyData[];
  hourly?: HourlyData[];
  daily?: DailyData[];
  alerts?: AlertData[];
};

export type HistoricalWeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  data?: DailyData[];
};

export type RequestOptions = {
  exclude?: WEATHER_EXCLUDE_FIELDS[];
  units?: WEATHER_UNITS;
};

export enum WEATHER_EXCLUDE_FIELDS {
  CURRENT = "current",
  MINUTELY = "minutely",
  HOURLY = "hourly",
  DAILY = "daily",
  ALERTS = "alerts",
}

export enum WEATHER_UNITS {
  STANDARD = "standard",
  METRIC = "metric",
  IMPERIAL = "imperial",
}

export interface IWeatherService {
  getCurrentWeatherDataV2_5: (coords: Coords) => Promise<any>;
  getCurrentWeatherDataV3?: (coords: Coords, options?: RequestOptions) => Promise<CurrentWeatherData>;
  getHistoricalWeatherData?: (coords: Coords, dt: number) => Promise<HistoricalWeatherData>;
}
