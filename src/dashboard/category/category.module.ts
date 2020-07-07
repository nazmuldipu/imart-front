import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { AddComponent } from './containers/add/add.component';
import { ListComponent } from './containers/list/list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryThumbFormComponent } from './components/category-thumb-form/category-thumb-form.component';

export const ROUTES: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent },
  { path: '', component: ListComponent },
];

@NgModule({
  declarations: [ListComponent, AddComponent, CategoryFormComponent, CategoryThumbFormComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class CategoryModule {}
