import { LocationForm } from '.';
import './styles.css';

export function template(this: LocationForm) {
  return (
    <>
      <div className='location-search'>
        <input type="text" defaultValue={this.location} onChange={e => {this.location = e.target.value}} />
        <button onClick={this.handleGeocoderResults}>Search</button>
      </div>
    </>
  );
}