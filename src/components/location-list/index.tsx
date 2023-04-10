import { Component } from "react";
import { LocationCoords } from '../../api/geocoding/types';
import { weatherService } from '../../api/weather/weather-service';
import './styles.css';

type LocationListProps = {
  locationCoords: LocationCoords[];
  handleWeatherData: (places: any) => void;
};

export class LocationList extends Component<LocationListProps> {
  render(): JSX.Element {
    return (
      <div className='location-list'>
        {this.props.locationCoords.map(r => (
          <div key={r.location}>
            <button
              onClick={async () => this.props.handleWeatherData(await weatherService.getCurrentWeatherDataV2_5(r.coords))}
            >{r.location}</button>
          </div>
        ))}
      </div>
    );
  }
}
