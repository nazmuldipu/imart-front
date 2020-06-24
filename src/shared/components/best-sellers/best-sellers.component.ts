import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent implements OnInit {
  titleCollapse = true;

  bestSellers = [
    {
      title: 'Flux',
      price: 360,
      old_price: 400,
      image_url: 'assets/dummy/photos/homeware/3.jpg',
      link: '/details/3',
      rating: 79
    },
    {
      title: 'Cup',
      price: 355,
      old_price: 420,
      image_url: 'assets/dummy/photos/homeware/4.jpg',
      link: '/details/4',
      rating: 63
    },
    {
      title: 'Double Flux',
      price: 130,
      old_price: 150,
      image_url: 'assets/dummy/photos/homeware/1.jpg',
      link: '/details/1',
      rating: 75
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
  }
}
