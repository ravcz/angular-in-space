import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.scss']
})
export class EngineersRoomComponent implements OnInit {

  isProducing: boolean;
  @Output() shipProduced = new EventEmitter<SpaceShip>();

  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.FighterShip},
    {label: 'Bombowiec', value: SpaceShipType.BomberShip}
  ];

  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.FighterShip, {
      validators: [Validators.required]
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)]
    })
  });

  constructor(
    private spaceShipService: SpaceShipService
  ) { }

  ngOnInit() {
  }

  orderSpaceShips(formValues: OrderFormValue) {
    console.log(formValues);
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
        .subscribe({
          next: (ship) => this.shipProduced.emit(ship),
          complete: () => this.isProducing = false
        });
  }

}
