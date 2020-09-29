import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import {Router, Routes} from '@angular/router';
import {FlightsComponent} from '../flights/flights.component';
import {HomeComponent} from './home.component';
import * as flightData from '../../assets/data/flights.json';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let location;
  let flightsList;
  const routes: Routes = [
    {path: 'flights', component: FlightsComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FlightsComponent ],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    flightsList = (flightData as any).default;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*  it('navigate to "flights" redirects you to /flights', fakeAsync(() => {
    router.navigate(['flights']);
    tick();
    expect(location.path()).toBe('flights');
  }));*/
  it('navigate to "flights" takes you to /flights', fakeAsync(() => {
    router.navigate(['/flights'], {state: {data: flightsList}}).then(() => {
      tick();
      expect(location.path()).toBe('/flights');
    });
  }));
});
