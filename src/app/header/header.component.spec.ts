import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have logo 'aidoc.net'`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.header-title').textContent).toContain('aidoc.net');
  });
  it(`should have nav bar`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.nav-item').textContent).toContain('Flights');
    expect(collection.querySelector('.nav-item').nextSibling.textContent).toContain('Hotels');
  });

  it(`should have login`, () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.header-login-link').textContent).toContain('Login');
  });
});
