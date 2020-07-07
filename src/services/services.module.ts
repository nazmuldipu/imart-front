import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CategoryService } from './category.service';
import { UserService } from './user.service';
import { UtilService } from './util.service';

@NgModule({
  providers:[
    AuthGuardService,
    AuthService,
    CategoryService,
    UserService, 
    UtilService
  ]
})
export class ServicesModule { }
