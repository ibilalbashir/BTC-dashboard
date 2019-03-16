import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceHistoryContainerComponent } from './price-history-container.component';

describe('PriceHistoryContainerComponent', () => {
  let component: PriceHistoryContainerComponent;
  let fixture: ComponentFixture<PriceHistoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceHistoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
