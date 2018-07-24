import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroppableBehaviourExampleRoutingModule } from './droppable-behaviour-example-routing.module';
import { DroppableBehaviourExampleComponent } from './droppable-behaviour-example.component';

@NgModule({
  imports: [
    CommonModule,
    DroppableBehaviourExampleRoutingModule
  ],
  declarations: [DroppableBehaviourExampleComponent]
})
export class DroppableBehaviourExampleModule { }
