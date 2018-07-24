import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroppableBehaviourExampleComponent } from './droppable-behaviour-example.component';

const routes: Routes = [
  { path: '', component: DroppableBehaviourExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroppableBehaviourExampleRoutingModule {}
