import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { DraggableDirective } from './directives/draggable.directive';
import { DraggableRxDirective } from 'src/app/shared/drag-and-drop/directives/draggable-rx.directive';
import { DraggableHelperDirective } from './directives/draggable-helper.directive';
import { DroppableDirective } from './directives/droppable.directive';
import { DropzoneDirective } from './directives/dropzone.directive';
import { MovableAreaDirective } from './directives/movable-area.directive';
import { MovableDirective } from './directives/movable.directive';
import { SortableDirective } from './directives/sortable.directive';
import { SortableListDirective } from './directives/sortable-list.directive';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [
    DraggableDirective,
    DraggableRxDirective,
    DraggableHelperDirective,
    DroppableDirective,
    DropzoneDirective,
    MovableAreaDirective,
    MovableDirective,
    SortableDirective,
    SortableListDirective
  ],
  exports: [
    DraggableDirective,
    DraggableRxDirective,
    DraggableHelperDirective,
    DroppableDirective,
    DropzoneDirective,
    MovableAreaDirective,
    MovableDirective,
    SortableDirective,
    SortableListDirective
  ]
})
export class DragAndDropModule {}
