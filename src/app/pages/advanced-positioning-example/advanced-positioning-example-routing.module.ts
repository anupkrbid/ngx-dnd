import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedPositioningExampleComponent } from './advanced-positioning-example.component';

const routes: Routes = [
  { path: '', component: AdvancedPositioningExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedPositioningExampleRoutingModule {}
