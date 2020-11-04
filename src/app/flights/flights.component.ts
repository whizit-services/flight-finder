import {Component, Input, OnInit} from '@angular/core';
import {FlightsService} from '../services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  showSearch = true;
  showFilter = true;
  flightList = [];
  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    if (history.state.data) {
      this.setAllFlights(history.state.data);
    } else {
      this.setAllFlights();
    }
  }

  setAllFlights(flights = this.flightService.flightsList) {
    this.flightList = [...flights];
  }
}
