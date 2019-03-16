import { FuturePredictionsModule } from './future-predictions.module';

describe('FuturePredictionsModule', () => {
  let futurePredictionsModule: FuturePredictionsModule;

  beforeEach(() => {
    futurePredictionsModule = new FuturePredictionsModule();
  });

  it('should create an instance', () => {
    expect(futurePredictionsModule).toBeTruthy();
  });
});
