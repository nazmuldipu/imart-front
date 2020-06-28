import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavCollapseComponent } from './components/side-nav-collapse/side-nav-collapse.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product1Component } from './components/product1/product1.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { ProductStyle1Component } from './components/product-style1/product-style1.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SideAdvComponent } from './components/side-adv/side-adv.component';

@NgModule({
  declarations: [
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    Product1Component,
    ProductRelatedComponent,
    ProductStyle1Component,
    SideAdvComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, CarouselModule],
  exports: [
    FormsModule,
    RouterModule,
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    Product1Component,
    ProductRelatedComponent,
    ProductStyle1Component,
    SideAdvComponent
  ],
})
export class SharedModule {}
