import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dash-side-navbar',
  templateUrl: './dash-side-navbar.component.html',
  styleUrls: ['./dash-side-navbar.component.scss'],
})
export class DashSideNavbarComponent implements OnInit {
  @Input() expand: boolean;

  navlink = 'dashboard';
  subNav = '';

  sidenav = [
    {
      name: 'Dashboard',
      icon: 'fa-tachometer',
      subnav: [
        { name: 'Analytics', icon: 'fa-pie-chart', link: '/dashboard' },
        { name: 'Visits', icon: 'fa-line-chart', link: '/dashboard' },
        { name: 'Widgets', icon: 'fa-windows', link: '/dashboard' },
      ],
    },
    {
      name: 'Category',
      link: '/dashboard/categories',
      icon: 'fa-cubes',
      subnav: [],
    },
    {
      name: 'Product',
      icon: 'fa-archive',
      subnav: [
        { name: 'Brands', icon: 'fa-tags', link: '/dashboard/products/brands' },
        { name: 'Shops', icon: 'fa-shopping-bag', link: '/dashboard/products/shops' },
      ],
    },
    {
      name: 'Accessories',
      link: '/dashboard/categories/add',
      icon: 'fa-sign-language ',
      subCagegories: [],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onNavLink(link) {
    if (this.navlink === link) {
      this.navlink = '';
    } else {
      this.navlink = link;
    }
  }
  onSubNav(link) {
    this.subNav = link;
  }
}
