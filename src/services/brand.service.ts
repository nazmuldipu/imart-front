import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Brand, BrandPage } from 'src/shared/models/brand.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brandUrl = 'api/brands';
  brandLink: string;

  constructor(private dataSource: RestDataService) {
    this.brandLink = this.dataSource.baseUrl + this.brandUrl;
  }

  create(brand: Brand): Observable<Brand> {
    var formData = new FormData();
    Object.keys(brand).forEach((key) => {
      formData.append(key, brand[key]);
    });

    return this.dataSource.sendRequest('POST', this.brandUrl, formData, true, null);
  }

  update(id, brand): Observable<Brand> {
    var formData = new FormData();
    Object.keys(brand).forEach((key) => {
      if (brand[key] != null) {
        formData.append(key, brand[key]);
      }
    });

    return this.dataSource.sendRequest('PUT', this.brandUrl + `/${id}`, formData, true, null);
  }

  getAll(page: number, limit: number, sort: string, order: string): Observable<BrandPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.brandUrl, null, false, params);
  }

  search(param: string): Observable<Brand[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dataSource.sendRequest('GET', this.brandUrl + '/search', null, false, paramUrl)
  }

  get(id): Observable<Brand> {
    return this.dataSource.sendRequest('GET', this.brandUrl + `/${id}`, null, false, null);
  }

  delete(id): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.brandUrl + `/${id}`, null, true, null);
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }
}
