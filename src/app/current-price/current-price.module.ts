import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentPriceRoutingModule } from './current-price-routing.module';
import { CurrentPriceContainerComponent } from './current-price-container/current-price-container.component';

@NgModule({
  imports: [CommonModule, CurrentPriceRoutingModule],
  declarations: [CurrentPriceContainerComponent],
  exports: [CurrentPriceContainerComponent]
})
export class CurrentPriceModule {}
