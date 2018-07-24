import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovableDirectiveExampleComponent } from './movable-directive-example.component';

const routes: Routes = [
  { path: '', component: MovableDirectiveExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovableDirectiveExampleRoutingModule {}
