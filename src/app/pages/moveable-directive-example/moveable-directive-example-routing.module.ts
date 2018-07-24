import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveableDirectiveExampleComponent } from './moveable-directive-example.component';

const routes: Routes = [
  { path: '', component: MoveableDirectiveExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveableDirectiveExampleRoutingModule {}
