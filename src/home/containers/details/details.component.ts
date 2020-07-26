import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/shared/json/dummy';
import { Product } from 'src/shared/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ProductDetails } from 'src/shared/models/product-details.model';
import { ProductDetailsService } from 'src/services/product-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id;
  current = 0;

  loading = false;
  imageUrls = [];
  message = '';
  errorMessage = '';


  item = {
    title: 'Description',
    image: 'assets/dummy/shop/tab-img.png',
    text:
      'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
    points: [
      'Any Product types that You want - Simple, Configurable, Bundled and Grouped Products',
      'Downloadable/Digital Products, Virtual Products',
      'Inventory Management with Backordered items',
    ],
  };

  // product = {
  //   id: this.id,
  //   companyId: 12,
  //   name: 'Pink Flux',
  //   browsingName: 'Flux',
  //   details:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   overview: '',
  //   description: {
  //     title: 'Description',
  //     image: 'assets/dummy/shop/tab-img.png',
  //     text:
  //       'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
  //     points: [
  //       'Any Product types that You want - Simple, Configurable, Bundled and Grouped Products',
  //       'Downloadable/Digital Products, Virtual Products',
  //       'Inventory Management with Backordered items',
  //     ],
  //   },
  //   tags: {
  //     title: 'Tags',
  //     image: 'assets/dummy/shop/tab-img.png',
  //     text:
  //       'Tags Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
  //     points: [
  //       'Any Product types that You want - Simple, Configurable, Bundled and Grouped Products',
  //       'Downloadable/Digital Products, Virtual Products',
  //       'Inventory Management with Backordered items',
  //     ],
  //   },
  //   reviews: {
  //     title: 'Reviews',
  //     image: 'assets/dummy/shop/tab-img.png',
  //     text:
  //       'Reviews Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
  //     points: [
  //       'Any Product types that You want - Simple, Configurable, Bundled and Grouped Products',
  //       'Downloadable/Digital Products, Virtual Products',
  //       'Inventory Management with Backordered items',
  //     ],
  //   },
  //   sizing_guide: {
  //     title: 'Sizing Guide',
  //     image: 'assets/dummy/shop/tab-img.png',
  //     text:
  //       'Sizing Guide Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
  //     points: [
  //       'Any Product types that You want - Simple, Configurable, Bundled and Grouped Products',
  //       'Downloadable/Digital Products, Virtual Products',
  //       'Inventory Management with Backordered items',
  //     ],
  //   },
  //   custom_tab: {
  //     title: 'CUSTOM TAB',
  //     image: 'assets/dummy/shop/tab-img.png',
  //     text:
  //       'CUSTOM TAB Guide Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.',
  //     points: [
  //       'Any Product types that You want - Simple, Configurable, Bundled and Grouped Products',
  //       'Downloadable/Digital Products, Virtual Products',
  //       'Inventory Management with Backordered items',
  //     ],
  //   },
  //   price: 250,
  //   listPrice: 270,
  //   image_urls: [
  //     {
  //       image: 'assets/dummy/photos/homeware/8.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/8.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/9.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/9.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/10.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/10.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/11.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/11.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/12.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/12.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/13.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/13.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/14.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/14.jpg',
  //     },
  //     {
  //       image: 'assets/dummy/photos/homeware/15.jpg',
  //       thumbImage: 'assets/dummy/photos/homeware/15.jpg',
  //     },
  //   ],
  //   rank: '',
  //   createdOn: '',
  //   updatedOn: '',
  //   rating: 75,
  //   inStock: true,
  //   stock: [
  //     {
  //       size: 'S',
  //       color_stock: [
  //         { color: 'Red', quantity: 3 },
  //         { color: 'Yellow', quantity: 5 },
  //         { color: 'White', quantity: 2 },
  //         { color: 'Orange', quantity: 5 },
  //         { color: 'Cyan', quantity: 1 },
  //         { color: 'Green', quantity: 0 },
  //         { color: 'Purple', quantity: 5 },
  //       ],
  //     },
  //     {
  //       size: 'M',
  //       color_stock: [
  //         { color: 'Red', quantity: 3 },
  //         { color: 'Yellow', quantity: 5 },
  //         { color: 'White', quantity: 0 },
  //         { color: 'Orange', quantity: 0 },
  //         { color: 'Cyan', quantity: 1 },
  //         { color: 'Green', quantity: 7 },
  //         { color: 'Purple', quantity: 5 },
  //       ],
  //     },
  //     {
  //       size: 'L',
  //       color_stock: [
  //         { color: 'Red', quantity: 0 },
  //         { color: 'Yellow', quantity: 0 },
  //         { color: 'White', quantity: 1 },
  //         { color: 'Orange', quantity: 3 },
  //         { color: 'Cyan', quantity: 1 },
  //         { color: 'Green', quantity: 7 },
  //         { color: 'Purple', quantity: 5 },
  //       ],
  //     },
  //     {
  //       size: 'XL',
  //       color_stock: [
  //         { color: 'Red', quantity: 7 },
  //         { color: 'Yellow', quantity: 6 },
  //         { color: 'White', quantity: 1 },
  //         { color: 'Orange', quantity: 3 },
  //         { color: 'Cyan', quantity: 1 },
  //         { color: 'Green', quantity: 0 },
  //         { color: 'Purple', quantity: 0 },
  //       ],
  //     },
  //     {
  //       size: '2XL',
  //       color_stock: [
  //         { color: 'Red', quantity: 0 },
  //         { color: 'Yellow', quantity: 0 },
  //         { color: 'White', quantity: 0 },
  //         { color: 'Orange', quantity: 0 },
  //         { color: 'Cyan', quantity: 0 },
  //         { color: 'Green', quantity: 0 },
  //         { color: 'Purple', quantity: 0 },
  //       ],
  //     },
  //   ],
  // };
  product: Product;
  productDetails: ProductDetails;

  imageObject = [];
  productSize = {
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
  };
  productColor;
  quantity = 1;

  show = {
    description: false,
    tags: false,
    reviews: false,
    sizing: false,
    custom: false,
  };

  constructor(private productService: ProductService, private productDetailsService: ProductDetailsService, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params['id'];
    // this.imageUrl = this.productService.productLink + '/image/';
  }

  ngOnInit(): void {
    if (this.id) {
      this.getProduct(this.id);
    }
    // this.productSize = this.product.stock[0];
    this.productColor = this.productSize.color_stock[0];

    // this.imageObject = [];
    // this.product.image_urls.forEach((url) => {
    //   this.imageObject.push({ thumbImage: url });
    // });
  }

  async getProductDetails(product_id) {
    this.loading = true;
    try {
      this.productDetails = await this.productDetailsService.getProductDetailsByProductId(product_id).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }


  async getProduct(id: string) {
    this.loading = true;
    try {
      this.product = await this.productService.get(id).toPromise();
      this.getProductDetails(id);
      this.imageUrls = [];
      for (let i = 0; i < this.product.image_count; i++) {
        const url = this.productService.productLink + '/image/' + this.product._id + '/' + i;
        this.imageUrls.push({ image: url, thumbImage: url })
      }
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onThumbImageClick(event) {
    this.current = event;
  }

  setSize(size) {
    this.productSize = size;
    this.productColor = null;
    for (let pcolor of this.productSize.color_stock) {
      if (pcolor.quantity > 0) {
        this.productColor = pcolor;
        break;
      }
    }
  }
  setColor(color) {
    this.productColor = color;
  }
  setQuantity(num) {
    this.quantity += num;
    if (this.quantity < 1) this.quantity = 1;
    if (this.quantity > 10) this.quantity = 10;
  }
  addToCart() {
    console.log('Add to cart');
  }
  addToFavourite() {
    console.log('addToFavourite');
  }
  onRefresh() {
    console.log('onRefresh');
  }
}
