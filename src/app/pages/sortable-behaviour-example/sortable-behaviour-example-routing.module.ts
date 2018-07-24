import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortableBehaviourExampleComponent } from './sortable-behaviour-example.component';

const routes: Routes = [
  { path: '', component: SortableBehaviourExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortableBehaviourExampleRoutingModule {}
