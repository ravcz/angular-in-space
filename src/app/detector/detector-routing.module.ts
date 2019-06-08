import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';

const routes: Routes = [
  {path: 'detector', component: PlanetDetectorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetectorRoutingModule { }
