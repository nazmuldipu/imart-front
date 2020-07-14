import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Shop } from 'src/shared/models/shop.model';
import { Observable } from 'rxjs';

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

  getAll(): Observable<Shop[]> {
    return this.dataSource.sendRequest('GET', this.shopUrl, null, false, null);
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
}
