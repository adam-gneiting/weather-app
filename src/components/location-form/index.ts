import { Component } from "react";
import { geocoder } from '../../api/geocoding/geocoding-service';
import { LocationCoords } from '../../api/geocoding/types';
import { template } from './template';

export type LocationFormProps = {
  handleNewLocation: (places: LocationCoords[]) => void;
};

export class LocationForm extends Component<LocationFormProps> {
  public location = '';

  public handleGeocoderResults = () => {
    geocoder.forward(this.location, this.geocoderCallback);
  }

  private geocoderCallback = (places: LocationCoords[]): void => {
    this.props.handleNewLocation(places);
  }

  render(): JSX.Element {
    return template.call(this);
  }
};