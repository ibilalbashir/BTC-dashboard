import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgoControlsContainerComponent } from './algo-controls-container/algo-controls-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AlgoControlsContainerComponent],
  exports: [AlgoControlsContainerComponent]
})
export class AlgoControlsModule {}
