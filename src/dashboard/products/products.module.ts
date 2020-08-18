import { NgModule } from '@angular/core';
import { BrandsComponent } from './containers/brands/brands.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { ShopsComponent } from './containers/shops/shops.component';
import { ShopFormComponent } from './components/shop-form/shop-form.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDetailsFormComponent } from './components/product-details-form/product-details-form.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { StorehouseComponent } from './containers/storehouse/storehouse.component';
import { StorehouseFormComponent } from './components/storehouse-form/storehouse-form.component';

export const ROUTES: Routes = [
  { path: 'shops', component: ShopsComponent },
  { path: 'storehouse', component: StorehouseComponent },
  { path: 'brands', component: BrandsComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [
    BrandsComponent,
    BrandFormComponent,
    ShopsComponent,
    ShopFormComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDetailsFormComponent,
    BrandListComponent,
    StorehouseComponent,
    StorehouseFormComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class ProductsModule { }
