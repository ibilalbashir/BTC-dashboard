import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentPriceCardContainerComponent } from './current-price-card-container/current-price-card-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrentPriceCardContainerComponent],
  exports: [CurrentPriceCardContainerComponent]
})
export class CurrentPriceCardModule {}
