import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'dash-side-navbar',
  templateUrl: './dash-side-navbar.component.html',
  styleUrls: ['./dash-side-navbar.component.scss'],
})
export class DashSideNavbarComponent implements OnInit {
  @Input() expand: boolean;
  @Input() roles: string[];

  navlink = 'dashboard';
  subNav = '';

  sidenav = [
    {
      name: 'Dashboard',
      icon: 'fa-tachometer',
      roles: ['ADMIN', 'SHOP', 'USER'],
      subnav: [
        { name: 'Analytics', icon: 'fa-pie-chart', roles: ['USER'], link: '/dashboard' },
        { name: 'Visits', icon: 'fa-line-chart', roles: ['SHOP'], link: '/dashboard' },
        { name: 'Widgets', icon: 'fa-windows', roles: ['ADMIN'], link: '/dashboard' },
      ],
    },
    {
      name: 'Category',
      link: '/dashboard/categories',
      icon: 'fa-cubes',
      roles: ['ADMIN'],
      subnav: [],
    },
    {
      name: 'Product',
      icon: 'fa-archive',
      roles: ['ADMIN', 'SHOP'],
      subnav: [
        { name: 'Brands', icon: 'fa-tags', 
        roles: ['ADMIN'], link: '/dashboard/products/brands' },
        {
          name: 'Shops', icon: 'fa-shopping-bag',
          roles: ['ADMIN'], link: '/dashboard/products/shops',
        },
        {
          name: 'Products', icon: 'fa-shopping-bag',
          roles: ['SHOP', 'ADMIN'], link: '/dashboard/products/',
        },
      ],
    },
    {
      name: 'Users',
      icon: 'fa-users',
      roles: ['ADMIN'],
      subnav: [
        { name: 'List', icon: 'fa-list', link: '/dashboard/users' },
        {
          name: 'Reset password',
          icon: 'fa-key',
          link: '/dashboard/users/reset-password',
        },
      ],
    },
    {
      name: 'Accessories',
      link: '/dashboard/categories/add',
      icon: 'fa-sign-language ',
      roles: ['USER'],
      subCagegories: [],
    },
  ];
  constructor() { }

  ngOnInit(): void { }

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

  validateRole(roles: string[]): boolean {
    if (!this.roles || this.roles.length == 0) return false;
    if (!roles || roles.length == 0) return true;

    let i, val;
    for (i = 0; i < this.roles.length; i++) {
      val = roles.includes(this.roles[0]);
      if (val) return true;
    }

    return false;
  }
}
