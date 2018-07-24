import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { DraggableDirective } from './directives/draggable.directive';
import { DraggableRxDirective } from 'src/app/shared/drag-and-drop/directives/draggable-rx.directive';
import { DraggableHelperDirective } from './directives/draggable-helper.directive';
import { MovableAreaDirective } from './directives/movable-area.directive';
import { MovableDirective } from './directives/movable.directive';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [
    DraggableDirective,
    DraggableRxDirective,
    DraggableHelperDirective,
    MovableAreaDirective,
    MovableDirective
  ],
  exports: [
    DraggableDirective,
    DraggableRxDirective,
    DraggableHelperDirective,
    MovableAreaDirective,
    MovableDirective
  ]
})
export class DragAndDropModule {}
