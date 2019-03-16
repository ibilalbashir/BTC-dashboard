import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayChartContainerComponent } from './today-chart-container.component';

describe('TodayChartContainerComponent', () => {
  let component: TodayChartContainerComponent;
  let fixture: ComponentFixture<TodayChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayChartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
