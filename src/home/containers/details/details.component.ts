import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/shared/json/dummy';
import { Product } from 'src/shared/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ProductDetails } from 'src/shared/models/product-details.model';
import { ProductDetailsService } from 'src/services/product-details.service';
import { ProductStockService } from 'src/services/product-stock.service';
import { ProductStock } from 'src/shared/models/product-stock.model';
import { ShopService } from 'src/services/shop.service';

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

  product: Product;
  productDetails: ProductDetails;
  productStocks: ProductStock[] = [];
  shopImageUrl = '';

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

  constructor(private productService: ProductService, private productDetailsService: ProductDetailsService,
    private productStockService: ProductStockService, private shopService: ShopService, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params['id'];
    // this.imageUrl = this.productService.productLink + '/image/';
    this.shopImageUrl = this.shopService.shopLink + '/image/';
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

  async getProductStock(product_id) {
    this.loading = true;
    try {
      this.productStocks = await this.productStockService.getProductStockByProductId(product_id).toPromise();
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
      this.getProductStock(id);
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
