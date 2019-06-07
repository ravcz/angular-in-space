import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { A2sCommModule } from 'a2s-comm';
import { SpaceModule } from './space/space.module';
import { DetectorModule } from './detector/detector.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    A2sCommModule,
    SpaceModule,
    DetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
