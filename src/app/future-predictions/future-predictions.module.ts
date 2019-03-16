import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturePredictionsRoutingModule } from './future-predictions-routing.module';
import { PredictionsContainerComponent } from './predictions-container/predictions-container.component';

@NgModule({
  imports: [CommonModule, FuturePredictionsRoutingModule],
  declarations: [PredictionsContainerComponent],
  exports: [PredictionsContainerComponent]
})
export class FuturePredictionsModule {}
