import { Coords } from '../weather/types';

export type GeocoderPostProcessor = {
  (results: LocationCoords[]): void;
}

export type GeocoderResult = {
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  }
};

export type LocationCoords = {
  location: string;
  coords: Coords;
}

export interface IGeocoder {
  forward: (query: string, callback: GeocoderPostProcessor) => Promise<void>;
}