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
    return this.dataSource.sendRequest(
      'POST',
      this.categoryUrl,
      category,
      true,
      null
    );
  }
}
