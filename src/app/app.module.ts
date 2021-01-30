import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { HttpInterceptor } from './services/http-interceptors';
import { AppService } from './app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertyFormComponent } from './property-form/property-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Property } from "./property";
import * as $ from 'jquery';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableComponent,
    PropertyFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpInterceptor,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
