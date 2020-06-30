import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  categories: Category[] = [];
  loading = true;
  message = '';
  errorMessage = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  async getAllCategory() {
    this.loading = true;
    try {
      this.categories = await this.categoryService.getAll().toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      console.log('onDelete ', id);
      try {
        const res = await this.categoryService.delete(id).toPromise();
        console.log(res);
        this.message = 'Category deleted';
        const index = this.categories.findIndex(cat => cat._id == id);
        this.categories.splice(index, 1);
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }
}
