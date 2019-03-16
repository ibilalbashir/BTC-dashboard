import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketDepthRoutingModule } from './market-depth-routing.module';
import { MarketDepthContainerComponent } from './market-depth-container/market-depth-container.component';

@NgModule({
  imports: [CommonModule, MarketDepthRoutingModule],
  declarations: [MarketDepthContainerComponent],
  exports: [MarketDepthContainerComponent]
})
export class MarketDepthModule {}
