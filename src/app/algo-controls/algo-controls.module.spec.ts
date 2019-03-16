import { AlgoControlsModule } from './algo-controls.module';

describe('AlgoControlsModule', () => {
  let algoControlsModule: AlgoControlsModule;

  beforeEach(() => {
    algoControlsModule = new AlgoControlsModule();
  });

  it('should create an instance', () => {
    expect(algoControlsModule).toBeTruthy();
  });
});
