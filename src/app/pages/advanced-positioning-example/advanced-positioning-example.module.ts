import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedPositioningExampleRoutingModule } from './advanced-positioning-example-routing.module';
import { AdvancedPositioningExampleComponent } from './advanced-positioning-example.component';

@NgModule({
  imports: [CommonModule, AdvancedPositioningExampleRoutingModule],
  declarations: [AdvancedPositioningExampleComponent]
})
export class AdvancedPositioningExampleModule {}
