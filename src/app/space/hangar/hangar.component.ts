import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {

  // spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;
  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  spaceShips = this.spaceShipService.hangarShips;

  constructor(
    private spaceShipService: SpaceShipService
  ) { }

  ngOnInit() {
    // this.spaceShips.push(new FighterShip());
    // this.spaceShips.push(new BomberShip());

    // this.spaceShips.push(new BomberShip(new Pilot('Lee Adama', '/assets/pilot_alien.jpg')));
    // const bombardier2 = new BomberShip();

    // bombardier2.health = 55;
    // this.spaceShips.push(bombardier2);

    // console.log(this.spaceShips);
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }


}
