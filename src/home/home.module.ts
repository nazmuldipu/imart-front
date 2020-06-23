import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { FotterComponent } from './components/fotter/fotter.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './containers/index/index.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    NavbarTopComponent,
    FotterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
