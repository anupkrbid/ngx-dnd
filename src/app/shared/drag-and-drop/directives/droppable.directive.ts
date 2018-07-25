import { Directive, HostListener } from '@angular/core';

import { DroppableService } from '../services/droppable.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  constructor(private droppableService: DroppableService) {}

  @HostListener('dragStart', ['$event'])
  ondragstart(event: PointerEvent) {
    this.droppableService.onDragStart(event);
  }

  @HostListener('dragMove', ['$event'])
  ondragmove(event: PointerEvent) {
    this.droppableService.onDragMove(event);
  }

  @HostListener('dragEnd', ['$event'])
  ondragend(event: PointerEvent) {
    this.droppableService.onDragEnd(event);
  }
}
