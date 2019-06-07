import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.scss']
})
export class PlanetDetectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  update(x) {
console.log(x);
  }

}
