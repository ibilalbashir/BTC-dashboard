import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceHistoryRoutingModule } from './price-history-routing.module';
import { PriceHistoryContainerComponent } from './price-history-container/price-history-container.component';

@NgModule({
  imports: [CommonModule, PriceHistoryRoutingModule],
  declarations: [PriceHistoryContainerComponent],
  exports: [PriceHistoryContainerComponent]
})
export class PriceHistoryModule {}
