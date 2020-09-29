import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() flights;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.flights && changes.flights.currentValue) {
      this.flights = changes.flights.currentValue;
    }
  }

  isFlightsPresents() {
    return !!(this.flights && this.flights.length > 0);
  }

}
