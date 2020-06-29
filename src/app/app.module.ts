import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { ServicesModule } from '../services/services.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

export const ROUTES: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    ServicesModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
