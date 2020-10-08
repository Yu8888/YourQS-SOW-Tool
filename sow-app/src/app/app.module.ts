import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BusinessDefaultsComponent } from './form/business-defaults/business-defaults.component';
import { ProjectSettingsComponent } from './form/project-settings/project-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ZoneComponent } from './zone/zone.component';
import { ProjectListComponent } from './project-list/project-list.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FormComponent,
    HomeComponent,
    BusinessDefaultsComponent,
    ProjectSettingsComponent,
    PageNotFoundComponent,
    ZoneComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
