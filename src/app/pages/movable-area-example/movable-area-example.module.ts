import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovableAreaExampleRoutingModule } from './movable-area-example-routing.module';
import { MovableAreaExampleComponent } from './movable-area-example.component';

@NgModule({
  imports: [CommonModule, MovableAreaExampleRoutingModule],
  declarations: [MovableAreaExampleComponent]
})
export class MovableAreaExampleModule {}
