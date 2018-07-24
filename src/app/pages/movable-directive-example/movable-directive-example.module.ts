import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropModule } from '../../shared/drag-and-drop/drag-and-drop.module';
import { MovableDirectiveExampleRoutingModule } from './movable-directive-example-routing.module';
import { MovableDirectiveExampleComponent } from './movable-directive-example.component';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule,
    MovableDirectiveExampleRoutingModule
  ],
  declarations: [MovableDirectiveExampleComponent]
})
export class MovableDirectiveExampleModule {}
