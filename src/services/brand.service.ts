import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Brand } from 'src/shared/models/brand.model';
import { Observable } from 'rxjs';

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

  getAll(): Observable<Brand[]> {
    return this.dataSource.sendRequest('GET', this.brandUrl, null, false, null);
  }

  get(id): Observable<Brand> {
    return this.dataSource.sendRequest('GET', this.brandUrl + `/${id}`, null, false, null);
  }

  delete(id): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.brandUrl + `/${id}`, null, true, null);
  }
}
