import { NgModule } from '@angular/core';
import { BrandsComponent } from './containers/brands/brands.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BrandFormComponent } from './components/brand-form/brand-form.component';

export const ROUTES: Routes = [{ path: 'brands', component: BrandsComponent }];

@NgModule({
  declarations: [BrandsComponent, BrandFormComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class ProductsModule {}
