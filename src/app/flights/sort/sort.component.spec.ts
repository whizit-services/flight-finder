import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SortComponent} from './sort.component';
import * as flightData from '../../../assets/data/flights.json';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;
  let flightsList;
  let service;
  let sortedFlights;
  let sortForm = {
    property: 'stations',
    sortBy: 'lowest'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    service = new FlightsService();
    fixture.detectChanges();
    flightsList = (flightData as any).default;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`sorted flights list by property stations`, () => {
    sortedFlights = service.sortFlights(flightsList, sortForm);
    expect(flightsList[0].stations === 0).toBeTruthy();
  });
  it(`sorted flights list by property price`, () => {
    sortForm = {
      property: 'price',
      sortBy: 'lowest'
    };
    sortedFlights = service.sortFlights(flightsList, sortForm);
    expect(flightsList[0].price === 100.00).toBeTruthy();
  });
  it(`sorted flights list by property date`, () => {
    sortForm = {
      property: 'date',
      sortBy: 'lowest'
    };
    sortedFlights = service.sortFlights(flightsList, sortForm);
    expect(flightsList[0].date === '2020-09-25T16:14:47.302Z').toBeTruthy();
  });
});
