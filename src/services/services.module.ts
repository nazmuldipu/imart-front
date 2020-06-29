import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';



@NgModule({
  providers:[
    AuthGuardService,
    AuthService,
    UserService, 
  ]
})
export class ServicesModule { }
