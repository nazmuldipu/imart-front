import { NgModule } from '@angular/core';
import { BrandsComponent } from './containers/brands/brands.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { ShopsComponent } from './containers/shops/shops.component';
import { ShopFormComponent } from './components/shop-form/shop-form.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const ROUTES: Routes = [
  { path: 'shops', component: ShopsComponent },
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
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class ProductsModule {}
