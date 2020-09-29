import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let submitEl;
  let collection;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement;
    collection = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should hide label 'From'`, () => {
    expect(fixture.debugElement.query(By.css('#from'))).toBeNull();
  });
  it(`should hide label 'To'`, () => {
    expect(fixture.debugElement.query(By.css('#to'))).toBeNull();
  });
  it(`should hide label 'Departure date'`, () => {
    expect(fixture.debugElement.query(By.css('#departureDate'))).toBeNull();
  });
  it(`should hide label 'Return date:'`, () => {
    expect(fixture.debugElement.query(By.css('#returnDate'))).toBeNull();
  });
  it(`should hide label 'Min Price:'`, () => {
    expect(fixture.debugElement.query(By.css('#minimumPrice'))).toBeNull();
  });
  it(`should hide label 'Max Price:'`, () => {
    expect(fixture.debugElement.query(By.css('#minimumPrice'))).toBeNull();
  });
});
