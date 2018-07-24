import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveableAreaExampleComponent } from './moveable-area-example.component';

const routes: Routes = [{ path: '', component: MoveableAreaExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveableAreaExampleRoutingModule {}
