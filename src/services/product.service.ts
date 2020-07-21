import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Product, ProductPage } from 'src/shared/models/product.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

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

    formData.delete('images')
    for (var i = 0; i < product['images'].length; i++) {
      formData.append('images', product['images'][i]);
    }

    return this.dataSource.sendRequest('POST', this.productUrl, formData, true, null);
  }

  update(id, product): Observable<Product> {
    var formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (product[key] != null) {
        formData.append(key, product[key]);
      }
    });

    formData.delete('images')
    for (var i = 0; i < product['images'].length; i++) {
      formData.append('images', product['images'][i]);
    }

    return this.dataSource.sendRequest('PUT', this.productUrl + `/${id}`, formData, true, null);
  }

  getAll(page: number, limit: number, sort: string, order: string): Observable<ProductPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
    return this.dataSource.sendRequest('GET', this.productUrl, null, false, params);
  }

  get(id): Observable<Product> {
    return this.dataSource.sendRequest('GET', this.productUrl + `/${id}`, null, false, null);
  }

  getByCategorySlug(category_slug: string): Observable<Product[]> {
    return this.dataSource.sendRequest('GET', this.productUrl + `/category/${category_slug}`, null, false, null);
  }

  getBySubCategorySlug(sub_category_slug: string): Observable<Product[]> {
    return this.dataSource.sendRequest('GET', this.productUrl + `/sub_category/${sub_category_slug}`, null, false, null);
  }

  getByBrandSlug(brand_slug: string): Observable<Product[]> {
    return this.dataSource.sendRequest('GET', this.productUrl + `/brand/${brand_slug}`, null, false, null);
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
