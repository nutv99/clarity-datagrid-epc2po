import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { RocketComponent } from './rocket/rocket.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClarityModule
  ],
  declarations: [
    AppComponent,
    LaunchesComponent,
    RocketComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
