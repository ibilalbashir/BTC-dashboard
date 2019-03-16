import { CurrentPriceModule } from './current-price.module';

describe('CurrentPriceModule', () => {
  let currentPriceModule: CurrentPriceModule;

  beforeEach(() => {
    currentPriceModule = new CurrentPriceModule();
  });

  it('should create an instance', () => {
    expect(currentPriceModule).toBeTruthy();
  });
});
