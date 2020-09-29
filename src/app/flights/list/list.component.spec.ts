import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {FlightsService} from '../../services/flights.service';
import * as flightData from '../../../assets/data/flights.json';

describe('ListComponent', () => {
  const flightsList = (flightData as any).default;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: FlightsService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [FlightsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = new FlightsService();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have not-found-msg`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.not-found-msg').textContent).toContain('No matching flights found');
  });

  it(`should have app-flight`, () => {
    spy = spyOn(service, 'getFlights').and.returnValue(flightsList);
    component.flights = service.getFlights();
    expect(component.flights).toBeTruthy();
    expect(component.flights.length).toBe(3);
  });

  it(`should have isFlightsPresents`, () => {
    spy = spyOn(service, 'getFlights').and.returnValue(flightsList);
    component.flights = service.getFlights();
    expect(component.isFlightsPresents()).toBeTruthy();
  });



});
