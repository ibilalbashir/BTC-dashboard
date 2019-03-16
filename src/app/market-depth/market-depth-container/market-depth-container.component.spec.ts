import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDepthContainerComponent } from './market-depth-container.component';

describe('MarketDepthContainerComponent', () => {
  let component: MarketDepthContainerComponent;
  let fixture: ComponentFixture<MarketDepthContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketDepthContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDepthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
