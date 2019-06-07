import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { Saturn } from '../planets/saturn';
import { Jowisz } from '../planets/jowisz';
import { Point } from '../interfaces/point';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.scss']
})
export class PlanetDetectorComponent implements OnInit {

  discover: string;
  planets: Planet[] = [];
  opacity = 1;

  axisYTop = 0;
  axisXLeft = 0;

  planetFound: Planet;


  constructor() { }

  ngOnInit() {
    this.planets.push(new Saturn(645, 234, 60));
    this.planets.push(new Jowisz(167, 230, 100));

    // console.log(this.planets);

  }

  detect(point: Point) {// coordinates typ Point x,y

    this.discover = null;
    console.log(point);
    for (const key in this.planets) {
        const dx = point.x - this.planets[key].x;
        const dy = point.y - this.planets[key].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        console.log('distance: ' + distance);

        let opacity = Math.round(distance / this.planets[key].radius * 100) / 100;
        console.log('opacity '+ opacity);
        if(opacity < 1 ){
          this.opacity = opacity;
          this.planetFound = this.planets[key];
          break;
        } else{
          this.opacity = 1;
        }

        if ( distance <= this.planets[0].radius) {
          console.log('znalazłem');
        }
    }
  }

  crosshair(e) {
   console.log(e.layerX);

    // this.axisXTop = points.x;
   this.axisXLeft = e.layerX - 5;
   this.axisYTop = e.layerY - 5;
  }

  inform() {
    if (this.planetFound) {
      this.discover = 'Wykryto nową plnetę';
    }
  }

}
