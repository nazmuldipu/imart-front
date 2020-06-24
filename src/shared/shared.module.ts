import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavCollapseComponent } from './components/side-nav-collapse/side-nav-collapse.component';



@NgModule({
  declarations: [SideNavCollapseComponent],
  imports: [
    CommonModule
  ],
  exports: [SideNavCollapseComponent]
})
export class SharedModule { }
