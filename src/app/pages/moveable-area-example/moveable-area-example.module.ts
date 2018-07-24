import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveableAreaExampleRoutingModule } from './moveable-area-example-routing.module';
import { MoveableAreaExampleComponent } from './moveable-area-example.component';

@NgModule({
  imports: [
    CommonModule,
    MoveableAreaExampleRoutingModule
  ],
  declarations: [MoveableAreaExampleComponent]
})
export class MoveableAreaExampleModule { }
