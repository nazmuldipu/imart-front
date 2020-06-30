import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Category } from 'src/shared/models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryUrl = 'api/categories';

  constructor(private dataSource: RestDataService) {}

  create(category: Category): Observable<Category> {
    return this.dataSource.sendRequest( 'POST', this.categoryUrl, category, true, null );
  }

  update(id, category): Observable<Category>{
    return this.dataSource.sendRequest('PUT', this.categoryUrl+`/${id}`, category, true, null);
  }

  getAll(): Observable<Category[]>{
    return this.dataSource.sendRequest('GET', this.categoryUrl, null, false, null);
  }

  get(id):Observable<Category>{
    return this.dataSource.sendRequest('GET',this.categoryUrl+`/${id}`, null, false, null);
  }

  delete(id):Observable<any>{
    return this.dataSource.sendRequest('DELETE', this.categoryUrl+`/${id}`, null, true, null);
  }

}
