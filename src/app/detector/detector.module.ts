import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetectorRoutingModule } from './detector-routing.module';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';

@NgModule({
  declarations: [PlanetDetectorComponent],
  exports: [
    PlanetDetectorComponent
  ],
  imports: [
    CommonModule,
    DetectorRoutingModule
  ]
})
export class DetectorModule { }
