import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedPositioningExampleRoutingModule } from './advanced-positioning-example-routing.module';
import { AdvancedPositioningExampleComponent } from './advanced-positioning-example.component';
import { DragAndDropModule } from '../../shared/drag-and-drop/drag-and-drop.module';

@NgModule({
  imports: [
    CommonModule,
    AdvancedPositioningExampleRoutingModule,
    DragAndDropModule
  ],
  declarations: [AdvancedPositioningExampleComponent]
})
export class AdvancedPositioningExampleModule {}
