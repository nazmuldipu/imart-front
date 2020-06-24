import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  titleCollapse = true;

  brands = [
    {
      name: 'Philips',
      image_url: 'assets/dummy/photos/brands/logo1.png',
      offer: 'Extra 9% Off On Non Electronics',
      link: '/brands/philips',
    },
    {
      name: 'Canon',
      image_url: 'assets/dummy/photos/brands/logo2.png',
      offer: 'Upto 50% + Non Electronics',
      link: '/brands/canon',
    },
    {
      name: 'Samsung',
      image_url: 'assets/dummy/photos/brands/logo20.png',
      offer: 'Flat 5% To 35% Off Best Price',
      link: '/brands/samsung',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
  }
}
