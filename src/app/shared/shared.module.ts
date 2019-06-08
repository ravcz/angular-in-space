import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceImageDirective } from './space-image.directive';
import { TickizePipe } from './tickize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpaceImageDirective, TickizePipe],
  exports: [SpaceImageDirective, TickizePipe]
})
export class SharedModule { }
