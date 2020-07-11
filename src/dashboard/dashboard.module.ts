import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { IndexComponent } from './containers/index/index.component';
import { DashboardComponent } from './dashboard.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { DashSideNavbarComponent } from './components/dash-side-navbar/dash-side-navbar.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    DashNavbarComponent,
    DashSideNavbarComponent,
    ChangePasswordComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
