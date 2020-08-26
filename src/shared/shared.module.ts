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
import { ToastComponent } from './components/toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DetailsCollapseComponent } from './components/details-collapse/details-collapse.component';
import { CategoryComponentComponent } from './components/category-component/category-component.component';
import { ModalDirective } from './directives/modal.directive';
import { Product2Component } from './components/product2/product2.component';


@NgModule({
  declarations: [
    SideNavCollapseComponent,
    PriceFilterComponent,
    BestSellersComponent,
    BrandsComponent,
    DetailsCollapseComponent,
    Product1Component,
    Product2Component,
    ProductRelatedComponent,
    ProductStyle1Component,
    SideAdvComponent,
    LoadingComponent,
    ToastComponent,
    PaginationComponent,
    CategoryComponentComponent,
    ModalDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule,
    RouterModule, CarouselModule],
  exports: [
    BestSellersComponent,
    BrandsComponent,
    CommonModule,
    FormsModule,
    DetailsCollapseComponent,
    PriceFilterComponent,
    Product1Component,
    Product2Component,
    ProductRelatedComponent,
    ProductStyle1Component,
    ReactiveFormsModule,
    RouterModule,
    SideNavCollapseComponent,
    SideAdvComponent,
    ToastComponent,
    LoadingComponent,
    NgbModule,
    PaginationComponent,
    CategoryComponentComponent,
    ModalDirective
  ],
})
export class SharedModule { }
