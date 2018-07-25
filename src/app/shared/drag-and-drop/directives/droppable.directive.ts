import { Directive, HostListener, ElementRef } from '@angular/core';

import { DroppableService } from '../services/droppable.service';
import { DraggableDirective } from './draggable.directive';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  constructor(private droppableService: DroppableService) {}

  @HostListener('dragStart', ['$event'])
  ondragstart(event: PointerEvent) {
    this.droppableService.onDragStart(event);
  }

  @HostListener('dragEnd', ['$event'])
  ondragend(event: PointerEvent) {
    this.droppableService.onDragEnd(event);
  }
}
