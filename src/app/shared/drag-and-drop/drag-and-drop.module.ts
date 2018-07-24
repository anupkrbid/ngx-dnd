import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/draggable.directive';
import { DraggableRxDirective } from 'src/app/shared/drag-and-drop/directives/draggable-rx.directive';
import { MovableAreaDirective } from './directives/movable-area.directive';
import { MovableDirective } from './directives/movable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, DraggableRxDirective, MovableAreaDirective, MovableDirective],
  exports: [DraggableDirective, DraggableRxDirective, MovableAreaDirective, MovableDirective]
})
export class DragAndDropModule {}
