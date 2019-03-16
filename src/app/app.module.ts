import { AlgoControlsModule } from './algo-controls/algo-controls.module';
import { CurrentPriceCardModule } from './current-price-card/current-price-card.module';
import { TodayChartModule } from './today-chart/today-chart.module';
import { PriceHistoryModule } from './price-history/price-history.module';
import { MarketDepthModule } from './market-depth/market-depth.module';
import { CurrentPriceModule } from './current-price/current-price.module';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuturePredictionsModule } from './future-predictions/future-predictions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    CurrentPriceModule,
    MarketDepthModule,
    PriceHistoryModule,
    TodayChartModule,
    FuturePredictionsModule,
    CurrentPriceCardModule,
    AlgoControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
