import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Category } from 'src/shared/models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryUrl = 'api/categories';
  catLink: string;

  constructor(private dataSource: RestDataService) {
    this.catLink = this.dataSource.baseUrl + this.categoryUrl;
  }

  create(category: Category): Observable<Category> {
    var formData = new FormData();
    Object.keys(category).forEach((key) => {
      formData.append(key, category[key]);
    });

    return this.dataSource.sendRequest(
      'POST',
      this.categoryUrl,
      formData,
      true,
      null
    );
  }

  update(id, category): Observable<Category> {
    var formData = new FormData();
    Object.keys(category).forEach((key) => {
      if (category[key] != null) {
        formData.append(key, category[key]);
      }
    });

    return this.dataSource.sendRequest(
      'PUT',
      this.categoryUrl + `/${id}`,
      formData,
      true,
      null
    );
  }

  postThumb(id, thumb):Observable<any>{
    var formData = new FormData();
    Object.keys(thumb).forEach((key) => {
      if (thumb[key] != null) {
        formData.append(key, thumb[key]);
      }
    });

    return this.dataSource.sendRequest(
      'POST',
      this.categoryUrl + `/thumb/${id}`,
      formData,
      true,
      null
    );
  }

  getAll(): Observable<Category[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.categoryUrl,
      null,
      false,
      null
    );
  }

  get(id): Observable<Category> {
    return this.dataSource.sendRequest(
      'GET',
      this.categoryUrl + `/${id}`,
      null,
      false,
      null
    );
  }

  delete(id): Observable<any> {
    return this.dataSource.sendRequest(
      'DELETE',
      this.categoryUrl + `/${id}`,
      null,
      true,
      null
    );
  }
}
