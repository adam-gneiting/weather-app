import opencage from 'opencage-api-client';
import { GeocoderPostProcessor, GeocoderResult, IGeocoder, LocationCoords } from './types';

class GeocodingService implements IGeocoder {
  async forward(query: string, callback: GeocoderPostProcessor): Promise<void> {
    // try {
      const response = await opencage.geocode({
        key: process.env.REACT_APP_OPENCAGE_API_KEY,
        q: query,
      });

      console.log('processed response:', response.results.map((r: GeocoderResult): LocationCoords => {
        return {
          location: r.formatted,
          coords: {
            lat: r.geometry.lat,
            lon: r.geometry.lng,
          }
        };
      }));

      callback(response.results.map((r: GeocoderResult): LocationCoords => {
        return {
          location: r.formatted,
          coords: {
            lat: r.geometry.lat,
            lon: r.geometry.lng,
          }
        };
      }));
    // } catch (error: any) {
    //   console.log('Error:', error.message);
    // }
  }
}

export const geocoder = new GeocodingService();