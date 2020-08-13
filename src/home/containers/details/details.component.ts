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
  stocks;
  stock;
  productStocks: ProductStock[] = [];
  shopImageUrl = '';

  imageObject = [];
  // productSize = {
  //   size: 'S',
  //   color_stock: [
  //     { color: 'Red', quantity: 3 },
  //     { color: 'Yellow', quantity: 5 },
  //     { color: 'White', quantity: 2 },
  //     { color: 'Orange', quantity: 5 },
  //     { color: 'Cyan', quantity: 1 },
  //     { color: 'Green', quantity: 0 },
  //     { color: 'Purple', quantity: 5 },
  //   ],
  // };
  // productColor;
  quantity = 1;
  selected;


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
    // this.productColor = this.productSize.color_stock[0];

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

      const values = [];
      for (let i = 0; i < this.productStocks.length; i++) {
        let ps = this.productStocks[i];

        const ind = values.findIndex(sp => sp.shop._id == ps.shop._id);
        if (ind == -1) {
          const obj = { shop: ps.shop, size_array: [{ size: ps.size, color_stock: [] }] }
          for (let j = 0; j < ps.color_stock.length; j++) {
            obj.size_array[obj.size_array.length - 1].color_stock.push(ps.color_stock[j])
          }
          values.push(obj);
        } else {
          values[ind].size_array.push({ size: ps.size, color_stock: [] })
          for (let j = 0; j < ps.color_stock.length; j++) {
            values[ind].size_array[values[ind].size_array.length - 1].color_stock.push(ps.color_stock[j])
          }
        }

      }
      this.stocks = values;

      /*Select first selected shop and */
      // for (let i = 0; i < this.stocks.length; i++) {
      //   for (let j = 0; j < this.stocks[i].color_stock.length; j++) {
      //     if (this.productStocks[i].color_stock[j].quantity > 0) {
      this.stock = this.stocks[0];
      this.selected = this.stocks[0].size_array[0];
      //       break;
      //     }
      //   }
      //   if (this.stock) {
      //     break;
      //   }
      // }
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
  onSelectShop(id) {
    this.stock = this.stocks.find(sh => sh.shop._id == id);
    // for (let j = 0; j < this.stock.size_arraycolor_stock.length; j++) {
    //   if (this.stock.color_stock[j].quantity > 0) {
    //     this.selected = this.stock.color_stock[j];
    //     break;
    //   }
    // }
  }
  setSize(size) {
    // this.productSize = size;
    // this.productColor = null;
    // for (let pcolor of this.productSize.color_stock) {
    //   if (pcolor.quantity > 0) {
    //     this.productColor = pcolor;
    //     break;
    //   }
    // }
  }

  setColor(color) {
    this.selected = color;
  }

  setQuantity(num) {
    if (this.selected.quantity > this.quantity) {
      this.quantity += num;
    }
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
