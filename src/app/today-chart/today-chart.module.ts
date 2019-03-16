import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayChartRoutingModule } from './today-chart-routing.module';
import { TodayChartContainerComponent } from './today-chart-container/today-chart-container.component';

@NgModule({
  imports: [CommonModule, TodayChartRoutingModule],
  declarations: [TodayChartContainerComponent],
  exports: [TodayChartContainerComponent]
})
export class TodayChartModule {}
