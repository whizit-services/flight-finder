import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() parent;
  showSearch = false;
  journeyLocations = {from: [], to: []};
  constructor(public flightService: FlightsService) {
    this.journeyLocations = flightService.getJourneyLocations();
  }

  ngOnInit(): void {
    if (!(this.flightService.searchForm && this.flightService.searchForm.contains('startLocation'))) {
      this.flightService.searchForm = new FormGroup({
        tripType: new FormControl(1),
        startLocation: new FormControl('', [Validators.required]),
        endLocation: new FormControl('', [Validators.required]),
        startDate: new FormControl(),
        endDate: new FormControl(),
        minPrice: new FormControl('', [Validators.min(0)]),
        maxPrice: new FormControl()
      });
    }
  }

  updateList() {
    const flights = this.flightService.getSearchedData(this.flightService.searchForm.value);
    this.update.emit(flights);
  }
  resetSearch() {
    this.flightService.searchForm.reset();
    this.update.emit(this.flightService.flightsList);
  }
}
