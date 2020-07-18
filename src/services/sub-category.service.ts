import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { SubCategory } from 'src/shared/models/sub-category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  subCategoryUrl = 'api/sub-categories';
  subCatLink: string;

  constructor(private dataSource: RestDataService) {
    this.subCatLink = this.dataSource.baseUrl + this.subCategoryUrl;
  }

  create(subCategory: SubCategory): Observable<SubCategory> {
    var formData = new FormData();
    Object.keys(subCategory).forEach((key) => {
      formData.append(key, subCategory[key]);
    });

    if (subCategory['images']) {
      formData.delete('images')
      for (var i = 0; i < subCategory['images'].length; i++) {
        formData.append('images', subCategory['images'][i]);
      }
    }

    return this.dataSource.sendRequest(
      'POST',
      this.subCategoryUrl,
      formData,
      true,
      null
    );
  }

  update(id, subCategory): Observable<SubCategory> {
    var formData = new FormData();
    Object.keys(subCategory).forEach((key) => {
      if (subCategory[key] != null) {
        formData.append(key, subCategory[key]);
      }
    });

    if (subCategory['images']) {
      formData.delete('images')
      for (var i = 0; i < subCategory['images'].length; i++) {
        formData.append('images', subCategory['images'][i]);
      }
    }

    return this.dataSource.sendRequest(
      'PUT',
      this.subCategoryUrl + `/${id}`,
      formData,
      true,
      null
    );
  }

  getAll(): Observable<SubCategory[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.subCategoryUrl,
      null,
      false,
      null
    );
  }

  get(id): Observable<SubCategory> {
    return this.dataSource.sendRequest(
      'GET',
      this.subCategoryUrl + `/${id}`,
      null,
      false,
      null
    );
  }

  delete(id): Observable<any> {
    return this.dataSource.sendRequest(
      'DELETE',
      this.subCategoryUrl + `/${id}`,
      null,
      true,
      null
    );
  }

  getByCategorySlug(slug: string) {
    return this.dataSource.sendRequest(
      'GET',
      this.subCategoryUrl + `/category/${slug}`,
      null,
      false,
      null
    );
  }

}
