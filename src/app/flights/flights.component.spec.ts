import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponent } from './flights.component';
import * as flightData from '../../assets/data/flights.json';

xdescribe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let flightsList;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    flightsList = (flightData as any).default;
  });

  it(`should have flights list`, () => {
    component.setAllFlights(flightsList);
    expect(component.flightList.length).toBe(3);
  });
});
