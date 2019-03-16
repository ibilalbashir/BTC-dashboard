import { MarketDepthModule } from './market-depth.module';

describe('MarketDepthModule', () => {
  let marketDepthModule: MarketDepthModule;

  beforeEach(() => {
    marketDepthModule = new MarketDepthModule();
  });

  it('should create an instance', () => {
    expect(marketDepthModule).toBeTruthy();
  });
});
