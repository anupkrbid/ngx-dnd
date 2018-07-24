import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/draggable.directive';
import { DraggableRxDirective } from 'src/app/shared/drag-and-drop/directives/draggable-rx.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, DraggableRxDirective],
  exports: [DraggableDirective, DraggableRxDirective]
})
export class DragAndDropModule {}
