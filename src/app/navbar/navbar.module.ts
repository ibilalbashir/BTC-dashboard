import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from './navbar-container/navbar-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarContainerComponent],
  exports: [NavbarContainerComponent]
})
export class NavbarModule {}
