import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPriceCardContainerComponent } from './current-price-card-container.component';

describe('CurrentPriceCardContainerComponent', () => {
  let component: CurrentPriceCardContainerComponent;
  let fixture: ComponentFixture<CurrentPriceCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPriceCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPriceCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
