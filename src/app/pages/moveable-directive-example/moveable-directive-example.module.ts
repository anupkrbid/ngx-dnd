import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveableDirectiveExampleRoutingModule } from './moveable-directive-example-routing.module';
import { MoveableDirectiveExampleComponent } from './moveable-directive-example.component';

@NgModule({
  imports: [
    CommonModule,
    MoveableDirectiveExampleRoutingModule
  ],
  declarations: [MoveableDirectiveExampleComponent]
})
export class MoveableDirectiveExampleModule { }
