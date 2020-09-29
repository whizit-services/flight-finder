import {EventEmitter, Injectable, Output} from '@angular/core';
// @ts-ignore
import * as flightData from '../../assets/data/flights.json';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  flightsList = (flightData as any).default;
  currentMode = false;
  @Output() invertColors = new EventEmitter();
  searchForm: FormGroup;

  constructor() {
  }

  getJourneyLocations() {
    return {
      from: Array.from(new Set(this.flightsList.map(flight => flight.startLocation))),
      to: Array.from(new Set(this.flightsList.map(flight => flight.endLocation)))
    };
  }

  getFlights() {
    return this.flightsList;
  }

  getDate(date) {
    return (date.setHours(0, 0, 0, 0) / 1000).toFixed(0);
  }

  getSearchedData(flight) {
    let flights = this.flightsList;
    flights = flights.filter(f => f.startLocation === flight.startLocation && f.endLocation === flight.endLocation);
    if (flight.minPrice || flight.maxPrice) {
      flights = flights.filter(f => f.price >= flight.minPrice && f.price <= flight.maxPrice);
    }
    if (flight.startDate && flight.endDate) {
      flights = flights.filter(f => this.getDate(new Date(f.date)) >= this.getDate(new Date(flight.startDate))
        && this.getDate(new Date(f.date)) <= this.getDate(new Date(flight.endDate)));
    } else if (flight.startDate) {
      flights = flights.filter(f =>
        this.getDate(new Date(f.date)) === this.getDate(new Date(flight.startDate))
      );
    }
    return flights;
  }

  filterFlights(flights, property, min, max) {
    return flights.filter(flight => flight[property] >= min && flight[property] <= max);
  }

  sortFlights(flights, flight) {
    const data = Object.assign({}, flight);
    if (data.property === 'date') {
      flights.forEach(f => f.newDate = this.getDate(new Date(f.date)));
      data.property = 'newDate';
    }
    return flights.sort((a, b) => (data.sortBy === 'lowest') ?
      a[data.property] - b[data.property] : b[data.property] - a[data.property]);
  }

  getFlightById(flights = [], id = 0) {
    return flights.filter(f => f.id === id).find(x => x !== undefined);
  }

  isMultipleStopFlight(flight) {
    return flight && flight.stations && flight.stations > 0;
  }
}
