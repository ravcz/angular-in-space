import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { A2sCommModule } from 'a2s-comm';
import { SpaceModule } from './space/space.module';
import { DetectorModule } from './detector/detector.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackHoleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    DetectorModule,
    SpaceModule,  // before AppRoutingModule
    AppRoutingModule,
    A2sCommModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
