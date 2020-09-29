import {TestBed} from '@angular/core/testing';

import {FlightsService} from './flights.service';
import * as flightData from '../../assets/data/flights.json';

describe('FlightsService', () => {
  const flightsList = (flightData as any).default;
  let service: FlightsService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('All flights should be loaded', () => {
    spy = spyOn(service, 'getFlights').and.returnValue(flightsList);
    expect(service.getFlights()).toBeTruthy();
  });
  it('flights should be Greater Than 0', () => {
    expect(service.getFlights().length).toBe(3);
  });

  it('get first value for "get Flight By Id" call', () => {
    spy = spyOn(service, 'getFlightById').and.returnValue(flightsList[0]);
    expect(service.getFlightById()).toBeTruthy();
    expect(service.getFlightById().id).toBeTruthy();
    expect(service.getFlightById().title).toContain('Mumbai');
    expect(service.getFlightById).toHaveBeenCalled();
  });

  it('is first flight "MultipleStop" Flight', () => {
    expect(flightsList[0].stations > 0).toBeTruthy();
  });

  it('is first flight "MultipleStop" Flight On Syp', () => {
    spy = spyOn(service, 'isMultipleStopFlight').and.returnValue(true);
    expect(service.isMultipleStopFlight(flightsList[0])).toBeTruthy();
    expect(service.isMultipleStopFlight).toHaveBeenCalled();
  });
});
