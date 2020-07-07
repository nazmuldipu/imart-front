import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/shared/models/category.model';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  categories: Category[] = [];
  thumbUrl='';
  loading = false;
  errorMessage = '';

  constructor(
    private categoryService: CategoryService,
    private utilService: UtilService
  ) {
    this.getAllCategory();
    this.thumbUrl = this.categoryService.catLink + '/thumb/';
  }

  ngOnInit(): void {}

  async getAllCategory() {
    this.loading = true;
    try {
      this.categories = await this.categoryService.getAll().toPromise();
      this.categories.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }
}
