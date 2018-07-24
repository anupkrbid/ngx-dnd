import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortableBehaviourExampleRoutingModule } from './sortable-behaviour-example-routing.module';
import { SortableBehaviourExampleComponent } from './sortable-behaviour-example.component';

@NgModule({
  imports: [
    CommonModule,
    SortableBehaviourExampleRoutingModule
  ],
  declarations: [SortableBehaviourExampleComponent]
})
export class SortableBehaviourExampleModule { }
