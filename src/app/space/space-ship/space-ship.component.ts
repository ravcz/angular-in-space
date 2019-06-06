import { Component, OnInit, Input } from '@angular/core';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.scss']
})
export class SpaceShipComponent implements OnInit {

  // spaceShip = {
  //   modelName: 'Viper',
  //   imageUrl: '/assets/spaceship.jpeg',
  //   health: 75,
  //   activeShields: true,
  //   activeWeapons: false
  // };

  @Input() spaceShip: SpaceShip;

  constructor() { }

  ngOnInit() {
  }

  // get pilot full name function

}
