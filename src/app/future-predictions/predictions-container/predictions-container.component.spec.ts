import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionsContainerComponent } from './predictions-container.component';

describe('PredictionsContainerComponent', () => {
  let component: PredictionsContainerComponent;
  let fixture: ComponentFixture<PredictionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
