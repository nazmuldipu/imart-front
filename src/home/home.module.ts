import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { CarouselComponent } from './components/carousel/carousel.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { TopbannerComponent } from './components/topbanner/topbanner.component';
import { CategoryComponent } from './containers/category/category.component';
import { DetailsComponent } from './containers/details/details.component';
import { IndexComponent } from './containers/index/index.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'category/:category', component: CategoryComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: '', component: IndexComponent },
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
    CarouselComponent,
    TopbannerComponent,
    NewArrivalsComponent,
    DetailsComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
