import {Component, OnInit} from '@angular/core';
import {FlightsService} from '../services/flights.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private flightService: FlightsService) {
  }

  ngOnInit(): void {
  }

  updateColors() {
    this.flightService.currentMode = !this.flightService.currentMode;
    this.flightService.invertColors.emit(this.flightService.currentMode);
  }
}
