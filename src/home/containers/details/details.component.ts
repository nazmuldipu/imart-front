import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/shared/json/dummy';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id;
  product = {
    id: this.id,
    companyId: 12,
    name: 'Pink Flux',
    browsingName: 'Flux',
    details:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    overview: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
    tags: ['Water pot', 'Flux', 'Water', 'Journey'],
    price: 250,
    listPrice: 270,
    image_urls: [
      {
        image: 'assets/dummy/photos/homeware/8.jpg',
        thumbImage: 'assets/dummy/photos/homeware/8.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/9.jpg',
        thumbImage: 'assets/dummy/photos/homeware/9.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/10.jpg',
        thumbImage: 'assets/dummy/photos/homeware/10.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/11.jpg',
        thumbImage: 'assets/dummy/photos/homeware/11.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/12.jpg',
        thumbImage: 'assets/dummy/photos/homeware/12.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/13.jpg',
        thumbImage: 'assets/dummy/photos/homeware/13.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/14.jpg',
        thumbImage: 'assets/dummy/photos/homeware/14.jpg',
      },
      {
        image: 'assets/dummy/photos/homeware/15.jpg',
        thumbImage: 'assets/dummy/photos/homeware/15.jpg',
      },
    ],
    rank: '',
    createdOn: '',
    updatedOn: '',
    rating: 9,
    stock: [
      {
        size: 'S',
        color_stock: [
          { color: 'Red', quantity: 3 },
          { color: 'Yellow', quantity: 5 },
          { color: 'White', quantity: 2 },
          { color: 'Orange', quantity: 5 },
          { color: 'Cyan', quantity: 1 },
          { color: 'Green', quantity: 0 },
          { color: 'Purple', quantity: 5 },
        ],
      },
      {
        size: 'M',
        color_stock: [
          { color: 'Red', quantity: 3 },
          { color: 'Yellow', quantity: 5 },
          { color: 'White', quantity: 0 },
          { color: 'Orange', quantity: 0 },
          { color: 'Cyan', quantity: 1 },
          { color: 'Green', quantity: 7 },
          { color: 'Purple', quantity: 5 },
        ],
      },
      {
        size: 'L',
        color_stock: [
          { color: 'Red', quantity: 0 },
          { color: 'Yellow', quantity: 0 },
          { color: 'White', quantity: 1 },
          { color: 'Orange', quantity: 3 },
          { color: 'Cyan', quantity: 1 },
          { color: 'Green', quantity: 7 },
          { color: 'Purple', quantity: 5 },
        ],
      },
      {
        size: 'XL',
        color_stock: [
          { color: 'Red', quantity: 7 },
          { color: 'Yellow', quantity: 6 },
          { color: 'White', quantity: 1 },
          { color: 'Orange', quantity: 3 },
          { color: 'Cyan', quantity: 1 },
          { color: 'Green', quantity: 0 },
          { color: 'Purple', quantity: 0 },
        ],
      },
      {
        size: '2XL',
        color_stock: [
          { color: 'Red', quantity: 7 },
          { color: 'Yellow', quantity: 6 },
          { color: 'White', quantity: 1 },
          { color: 'Orange', quantity: 3 },
          { color: 'Cyan', quantity: 1 },
          { color: 'Green', quantity: 0 },
          { color: 'Purple', quantity: 0 },
        ],
      },
    ],
    reviews: [{}],
  };

  imageObject = [];
  current = 0;
  show = {
    description: false,
    tags: false,
    reviews: false,
    sizing: false,
    custom: false,
  };

  constructor(private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.imageObject = [];
    this.product.image_urls.forEach((url) => {
      this.imageObject.push({ thumbImage: url });
    });
    console.log(this.imageObject);
  }

  onThumbImageClick(event) {
    this.current = event;
  }
}
