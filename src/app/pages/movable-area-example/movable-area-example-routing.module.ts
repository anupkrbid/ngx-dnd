import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovableAreaExampleComponent } from './movable-area-example.component';

const routes: Routes = [{ path: '', component: MovableAreaExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovableAreaExampleRoutingModule {}
