import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { ListComponent } from './flights/list/list.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './flights/search/search.component';
import { FilterComponent } from './flights/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { SortComponent } from './flights/sort/sort.component';
import {MatSliderModule} from '@angular/material/slider';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {Ng5SliderModule} from 'ng5-slider';
import {MatNativeDateModule} from '@angular/material/core';
import { FlightComponent } from './flights/flight/flight.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    ListComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    SortComponent,
    FooterComponent,
    FlightComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
