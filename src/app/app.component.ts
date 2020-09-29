import { Component } from '@angular/core';
import {FlightsService} from './services/flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private flightService: FlightsService) {
    this.flightService.invertColors.subscribe(val => {
      val ? document.getElementById('base-element').className = 'dark-mode' :
        document.getElementById('base-element').className = 'bright-mode';
    });
  }
}
