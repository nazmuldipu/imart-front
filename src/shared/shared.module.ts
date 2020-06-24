import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavCollapseComponent } from './components/side-nav-collapse/side-nav-collapse.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';

@NgModule({
  declarations: [SideNavCollapseComponent, PriceFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [SideNavCollapseComponent, PriceFilterComponent]
})
export class SharedModule { }
