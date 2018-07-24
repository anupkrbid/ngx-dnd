import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirectiveExampleRoutingModule } from './draggable-directive-example-routing.module';
import { DraggableDirectiveExampleComponent } from './draggable-directive-example.component';

@NgModule({
  imports: [
    CommonModule,
    DraggableDirectiveExampleRoutingModule
  ],
  declarations: [DraggableDirectiveExampleComponent]
})
export class DraggableDirectiveExampleModule { }
