import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPriceContainerComponent } from './current-price-container.component';

describe('CurrentPriceContainerComponent', () => {
  let component: CurrentPriceContainerComponent;
  let fixture: ComponentFixture<CurrentPriceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPriceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPriceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
