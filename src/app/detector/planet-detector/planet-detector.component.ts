import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.scss']
})
export class PlanetDetectorComponent implements OnInit {

  planets: Planet[] = [];

  constructor() { }

  ngOnInit() {
    // this.planets.push(new Planet(636, 252, 100));
    // this.planets.push(new Planet(155, 243, 200));

    console.log(this.planets);

  }

  detect(coordinates) { // typ Point x,y
    // for (var key in this.planets) {
    //   let dx = coordinates.x - parseInt(this.planets[key].x);
    //   let dy = coordinates.y - this.planets[key].y;
    //   console.log(Math.sqrt(dx * dx + dy * dy));
    //   if (Math.sqrt(dx * dx + dy * dy) < this.planets[key].radius) {
    //     console.log('BLISKO');
    //   }
    // }
  }

}
