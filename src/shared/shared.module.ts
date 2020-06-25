import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavCollapseComponent } from './components/side-nav-collapse/side-nav-collapse.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product1Component } from './components/product1/product1.component';

@NgModule({
  declarations: [
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    Product1Component,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    FormsModule,
    RouterModule,
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    Product1Component,
  ],
})
export class SharedModule {}
