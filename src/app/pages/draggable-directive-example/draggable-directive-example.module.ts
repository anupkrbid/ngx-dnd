import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirectiveExampleRoutingModule } from './draggable-directive-example-routing.module';
import { DraggableDirectiveExampleComponent } from './draggable-directive-example.component';
import { DragAndDropModule } from '../../shared/drag-and-drop/drag-and-drop.module';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule,
    DraggableDirectiveExampleRoutingModule
  ],
  declarations: [DraggableDirectiveExampleComponent]
})
export class DraggableDirectiveExampleModule {}
