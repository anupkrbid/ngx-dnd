import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropModule } from '../../shared/drag-and-drop/drag-and-drop.module';
import { SortableBehaviourExampleRoutingModule } from './sortable-behaviour-example-routing.module';
import { SortableBehaviourExampleComponent } from './sortable-behaviour-example.component';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule,
    SortableBehaviourExampleRoutingModule
  ],
  declarations: [SortableBehaviourExampleComponent]
})
export class SortableBehaviourExampleModule {}
