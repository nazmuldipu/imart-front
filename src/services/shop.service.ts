import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Shop, ShopPage } from 'src/shared/models/shop.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shopUrl = 'api/shops';
  shopLink: string;

  constructor(private dataSource: RestDataService) {
    this.shopLink = this.dataSource.baseUrl + this.shopUrl;
  }

  create(shop: Shop): Observable<Shop> {
    var formData = new FormData();
    Object.keys(shop).forEach((key) => {
      formData.append(key, shop[key]);
    });

    return this.dataSource.sendRequest('POST', this.shopUrl, formData, true, null);
  }

  update(id, shop): Observable<Shop> {
    var formData = new FormData();
    Object.keys(shop).forEach((key) => {
      if (shop[key] != null) {
        formData.append(key, shop[key]);
      }
    });

    return this.dataSource.sendRequest('PUT', this.shopUrl + `/${id}`, formData, true, null);
  }

  getAll(page: number, limit: number, sort: string, order: string): Observable<ShopPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.shopUrl, null, false, params);
  }

  get(id): Observable<Shop> {
    return this.dataSource.sendRequest('GET', this.shopUrl + `/${id}`, null, false, null);
  }

  delete(id): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.shopUrl + `/${id}`, null, true, null);
  }

  toggleApprove(id): Observable<any> {
    return this.dataSource.sendRequest('PATCH',
      this.shopUrl + `/approve/${id}`, null, true, null);
  }

  search(param: string): Observable<Shop[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dataSource.sendRequest('GET', this.shopUrl + '/search', null, false, paramUrl)
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }
}
