import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { ProductDetails } from 'src/shared/models/product-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  productDetailsUrl = 'api/products-details';

  constructor(private dataSource: RestDataService) { }

  create(productDetails: ProductDetails): Observable<ProductDetails> {
    return this.dataSource.sendRequest('POST', this.productDetailsUrl, productDetails, true, null);
  }

  add(id: string, productDetails: ProductDetails): Observable<any> {
    return this.dataSource.sendRequest('PUT', this.productDetailsUrl + `/add/${id}`, productDetails, true, null);
  }

  remove(id: string, title: string): Observable<any> {
    const value = { title }
    return this.dataSource.sendRequest('PUT', this.productDetailsUrl + `/remove/${id}`, value, true, null);
  }

  getProductDetails(id: string): Observable<ProductDetails> {
    return this.dataSource.sendRequest('GET', this.productDetailsUrl + `/${id}`, null, false, null);
  }

  getProductDetailsByProductId(productId: string): Observable<ProductDetails> {
    return this.dataSource.sendRequest('GET', this.productDetailsUrl + `/product/${productId}`, null, false, null);
  }

}