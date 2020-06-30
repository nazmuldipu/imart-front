import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { IndexComponent } from './containers/index/index.component';
import { DashboardComponent } from './dashboard.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { DashSideNavbarComponent } from './components/dash-side-navbar/dash-side-navbar.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, IndexComponent, DashNavbarComponent, DashSideNavbarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
