import { CurrentPriceCardModule } from './current-price-card.module';

describe('CurrentPriceCardModule', () => {
  let currentPriceCardModule: CurrentPriceCardModule;

  beforeEach(() => {
    currentPriceCardModule = new CurrentPriceCardModule();
  });

  it('should create an instance', () => {
    expect(currentPriceCardModule).toBeTruthy();
  });
});
