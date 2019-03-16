import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoControlsContainerComponent } from './algo-controls-container.component';

describe('AlgoControlsContainerComponent', () => {
  let component: AlgoControlsContainerComponent;
  let fixture: ComponentFixture<AlgoControlsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoControlsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoControlsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
