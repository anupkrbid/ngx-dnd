import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovableAreaExampleRoutingModule } from './movable-area-example-routing.module';
import { MovableAreaExampleComponent } from './movable-area-example.component';
import { DragAndDropModule } from '../../shared/drag-and-drop/drag-and-drop.module';

@NgModule({
  imports: [CommonModule, DragAndDropModule, MovableAreaExampleRoutingModule],
  declarations: [MovableAreaExampleComponent]
})
export class MovableAreaExampleModule {}
