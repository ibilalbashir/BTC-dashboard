import { PriceHistoryModule } from './price-history.module';

describe('PriceHistoryModule', () => {
  let priceHistoryModule: PriceHistoryModule;

  beforeEach(() => {
    priceHistoryModule = new PriceHistoryModule();
  });

  it('should create an instance', () => {
    expect(priceHistoryModule).toBeTruthy();
  });
});
