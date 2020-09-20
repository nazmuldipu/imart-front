import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
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
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { OrdersComponent } from './containers/orders/orders.component';
// import { DetailsCollapseComponent } from '../shared/components/details-collapse/details-collapse.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'category/:slug', component: CategoryComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: IndexComponent },
    ],
  },
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
    DetailModalComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgImageSliderModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class HomeModule {}
