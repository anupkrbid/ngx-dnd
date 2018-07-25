import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropModule } from '../../shared/drag-and-drop/drag-and-drop.module';
import { DroppableBehaviourExampleRoutingModule } from './droppable-behaviour-example-routing.module';
import { DroppableBehaviourExampleComponent } from './droppable-behaviour-example.component';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule,
    DroppableBehaviourExampleRoutingModule
  ],
  declarations: [DroppableBehaviourExampleComponent]
})
export class DroppableBehaviourExampleModule {}
