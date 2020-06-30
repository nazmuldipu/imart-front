import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // template: `
  //   <dash-side-navbar></dash-side-navbar>
  //   <router-outlet></router-outlet>
  // `,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  sideNavExpand = true;

  ngOnInit(): void {}

  onSidenavExpand(event) {
    this.sideNavExpand = event;
  }
}
