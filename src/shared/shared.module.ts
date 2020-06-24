import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavCollapseComponent } from './components/side-nav-collapse/side-nav-collapse.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    FormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
