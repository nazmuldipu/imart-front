import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from '../services/services.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgImageSliderModule } from 'ng-image-slider';

export const ROUTES: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
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
    BrowserAnimationsModule,
    FormsModule,
    ServicesModule,
    RouterModule.forRoot(ROUTES),
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
