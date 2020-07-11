import { NgModule } from '@angular/core';
import { ListComponent } from './containers/list/list.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './containers/add/add.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';

export const ROUTES: Routes = [
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, AddComponent, UserFormComponent, UserListComponent, ResetPasswordComponent, ResetPasswordFormComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule { }
