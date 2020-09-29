import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() flights;
  @Output() change = new EventEmitter();
  costOptions = {
    floor: 50,
    ceil: 1000,
    step: 50,
    property: 'price',
    min: 50,
    max: 1000
  };
  stationOptions = {
    floor: 0,
    ceil: 5,
    step: 1,
    property: 'stations',
    min: 0,
    max: 5
  };
  sizeOptions = {
    floor: 10,
    ceil: 200,
    step: 10,
    property: 'capacity',
    min: 10,
    max: 200
  };
  sortForm: FormGroup;
  allFlights = [];
  updateAllFlights = true;
  constructor(private flightService: FlightsService) {
  }

  ngOnInit(): void {
    this.sortForm = new FormGroup({
      directFlight: new FormControl()
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.flights && changes.flights.currentValue) {
      this.flights = changes.flights.currentValue;
      if (this.updateAllFlights) {
        this.allFlights = this.flights;
      } else {
        this.updateAllFlights = true;
      }
    }
  }

  directFlightUpdate(event) {
    if (event.target.checked) {
      this.allFlights = this.flights;
      this.updateAllFlights = false;
      this.change.emit(this.flights.filter(flight => flight.stations < 1));
    } else {
      this.change.emit(this.allFlights);
    }
  }

  filterList() {
    let flights = this.allFlights;
    [this.costOptions, this.sizeOptions, this.stationOptions].forEach(option => {
      flights = this.flightService.filterFlights(flights, option.property, option.min, option.max);
    });
    this.updateAllFlights = false;
    this.change.emit(flights);
  }
}
