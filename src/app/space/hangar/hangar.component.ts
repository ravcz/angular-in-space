import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip(new Pilot('Lee Adama', '/assets/pilot_alien.jpg')));
    const bombardier2 = new BomberShip();

    bombardier2.health = 55;
    this.spaceShips.push(bombardier2);

    console.log(this.spaceShips);
  }

}
