import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightComponent} from './flight.component';
import * as flightData from '../../../assets/data/flights.json';
import {FlightsService} from '../../services/flights.service';

describe('FlightComponent', () => {
  const flightsList = (flightData as any).default;
  let component: FlightComponent;
  let service: FlightsService;
  let fixture: ComponentFixture<FlightComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightComponent);
    service = new FlightsService();
    component = fixture.componentInstance;
    spy = spyOn(service, 'getFlights').and.returnValue(flightsList);
    component.flight = service.getFlightById(service.getFlights(), 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have flight component', () => {
    expect(component.flight).toBeTruthy();
    expect(component.flight.title).toContain('Mumbai');
  });

  it('should have multi Multiple Stop Flight', () => {
    expect(component.isMultipleStopFlight).toBeTruthy();
    const collection = fixture.nativeElement;
  });

  it('should have title', () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.title').textContent).toContain(component.flight.title);
  });
});
