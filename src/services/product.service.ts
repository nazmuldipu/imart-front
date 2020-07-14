import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Product } from 'src/shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'api/products';
  productLink: string;

  constructor(private dataSource: RestDataService) {
    this.productLink = this.dataSource.baseUrl + this.productUrl;
  }

  create(product: Product): Observable<Product> {
    var formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    return this.dataSource.sendRequest('POST', this.productUrl, formData, true, null);
  }

  update(id, product): Observable<Product> {
    var formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (product[key] != null) {
        formData.append(key, product[key]);
      }
    });

    return this.dataSource.sendRequest('PUT', this.productUrl + `/${id}`, formData, true, null);
  }

  getAll(): Observable<Product[]> {
    return this.dataSource.sendRequest('GET', this.productUrl, null, false, null);
  }

  get(id): Observable<Product> {
    return this.dataSource.sendRequest('GET', this.productUrl + `/${id}`, null, false, null);
  }

  toggleActive(id): Observable<any> {
    return this.dataSource.sendRequest('PATCH',
      this.productUrl + `/activate/${id}`, null, true, null);
  }

  togglePublish(id): Observable<any> {
    return this.dataSource.sendRequest('PATCH',
      this.productUrl + `/publish/${id}`, null, true, null);
  }
}
