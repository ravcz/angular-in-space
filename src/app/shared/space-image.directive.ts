import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
export class SpaceImageDirective {

  zoom = 1.0;

  @HostBinding('style.transform') get styleTransform() {
    return this.zoom;
  }

  @HostListener('mousemove') onMouseOver() {
    this.zoom += 0.005;
  }

  @HostListener('mouseout') onMouseOut() {
    this.zoom += 1.0;
  }

  constructor() { }

}
