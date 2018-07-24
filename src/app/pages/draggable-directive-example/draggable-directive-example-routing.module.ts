import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraggableDirectiveExampleComponent } from './draggable-directive-example.component';

const routes: Routes = [
  { path: '', component: DraggableDirectiveExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraggableDirectiveExampleRoutingModule { }
