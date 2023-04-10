import { Component } from "react";
import { LocationCoords } from './api/geocoding/types';
import { LocationForm } from './components/location-form';
import { LocationList } from './components/location-list';
import './App.css';

class App extends Component {
  private locationCoords: LocationCoords[] = [];
  private weatherData: any;

  private handleNewLocation = (places: LocationCoords[]): void => {
    this.locationCoords = places;
    this.forceUpdate();
  }

  private handleWeatherData = (data: any): void => {
    this.weatherData = data;
    this.forceUpdate();
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <LocationForm handleNewLocation={this.handleNewLocation}/>
        {this.locationCoords && <LocationList locationCoords={this.locationCoords} handleWeatherData={this.handleWeatherData}/>}
        {this.weatherData &&
        <div className='temporary-weather-output'>
          <pre>
            <code>
              {JSON.stringify(this.weatherData, null, 4)}
            </code>
          </pre>
        </div>}
      </div>
    );
  }
}

export default App;
