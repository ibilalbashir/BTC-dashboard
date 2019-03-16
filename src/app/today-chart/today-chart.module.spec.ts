import { TodayChartModule } from './today-chart.module';

describe('TodayChartModule', () => {
  let todayChartModule: TodayChartModule;

  beforeEach(() => {
    todayChartModule = new TodayChartModule();
  });

  it('should create an instance', () => {
    expect(todayChartModule).toBeTruthy();
  });
});
