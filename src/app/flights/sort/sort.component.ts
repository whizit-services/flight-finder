import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit, OnChanges {
  @Output() sort = new EventEmitter();
  @Input() flights;
  sortForm: FormGroup;
  propertyList = ['stations', 'date', 'price'];
  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.sortForm = new FormGroup({
      property: new FormControl('', [Validators.required]),
      sortBy: new FormControl('', [Validators.required])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.flights && changes.flights.currentValue) {
      this.flights = changes.flights.currentValue;
    }
  }

  updateFormData(property) {
    let data = this.sortForm.value;
    if (data.property === property) {
      data.sortBy = data.sortBy === 'lowest' ? 'highest' : 'lowest';
    } else {
      data = {property, sortBy: 'lowest'};
    }
    this.sortForm.patchValue(data);
    this.updateList();
  }

  updateList() {
    const flights = this.flightService.sortFlights(this.flights, this.sortForm.value);
    this.sort.emit(flights);
  }
}
