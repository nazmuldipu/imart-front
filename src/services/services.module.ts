import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CategoryService } from './category.service';
import { BrandService } from './brand.service';
import { ProductService } from './product.service';
import { ShopService } from './shop.service';
import { ToastService } from './toast.service';
import { UserService } from './user.service';
import { UtilService } from './util.service';
import { SubCategoryService } from './sub-category.service';
import { ProductDetailsService } from './product-details.service';

@NgModule({
  providers:[
    AuthGuardService,
    AuthService,
    BrandService,
    CategoryService,
    ProductService,
    ProductDetailsService,
    ShopService,
    SubCategoryService,
    ToastService,
    UserService, 
    UtilService
  ],
})
export class ServicesModule { }
