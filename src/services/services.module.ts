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

@NgModule({
  providers:[
    AuthGuardService,
    AuthService,
    BrandService,
    CategoryService,
    ProductService,
    ShopService,
    ToastService,
    UserService, 
    UtilService
  ]
})
export class ServicesModule { }
