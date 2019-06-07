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
    this.planets.push(new Planet(636, 252, 100));
    this.planets.push(new Planet(155, 243, 200));

  }

//   update(x) {
// console.log(x);
//   }

  test(e) {
    for (var planet in this.planets) {
      console.log(planet);
      // let dx = e.layerX - planet.x;
      // let dy = e.layerY - planet.y;
      // if (Math.sqrt(dx * dx + dy * dy) < 100) {
      //   console.log('BLISKO');
      // }
    }
  }

}
