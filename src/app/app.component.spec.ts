import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { Location } from '@angular/common';
import {Router, Routes} from '@angular/router';
import {FlightsComponent} from './flights/flights.component';
import {HomeComponent} from './home/home.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location;
  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'flights', component: FlightsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have app-header`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('app-header')).toBeTruthy();
  });

  it(`should have router-outlet`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('router-outlet')).toBeTruthy();
  });

  it(`should have app-footer`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('app-footer')).toBeTruthy();
  });
  it('navigate to "flights" takes you to /flights', fakeAsync(() => {
    router.navigate(['/flights']).then(() => {
      tick();
      expect(location.path()).toBe('/flights');
    });
  }));
  it('navigate to "" takes you to /home', fakeAsync(() => {
    router.navigate(['']).then(() => {
      tick();
      expect(location.path()).toBe('/home');
    });
  }));
  it('navigate to "home" takes you to /home', fakeAsync(() => {
    router.navigate(['/home']).then(() => {
      tick();
      expect(location.path()).toBe('/home');
    });
  }));
});
