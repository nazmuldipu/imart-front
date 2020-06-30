import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavCollapseComponent } from './components/side-nav-collapse/side-nav-collapse.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product1Component } from './components/product1/product1.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { ProductStyle1Component } from './components/product-style1/product-style1.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SideAdvComponent } from './components/side-adv/side-adv.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    LoadingComponent,
  ],
  imports: [CommonModule, FormsModule,ReactiveFormsModule, RouterModule, CarouselModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    Product1Component,
    ProductRelatedComponent,
    ProductStyle1Component,
    SideAdvComponent,
    LoadingComponent
  ],
})
export class SharedModule {}
