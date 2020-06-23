import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { FotterComponent } from './components/fotter/fotter.component';

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
];

@NgModule({
  declarations: [HomeComponent, IndexComponent, NavbarComponent, NavbarTopComponent, FotterComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
