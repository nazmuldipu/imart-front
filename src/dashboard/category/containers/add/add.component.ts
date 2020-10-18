import { Component, OnInit } from '@angular/core';
import { Category } from 'src/shared/models/category.model';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  id;
  category: Category;

  loading = false;
  message: string = '';
  errorMessage: string = '';

  constructor(
    private categoryService: CategoryService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id) {
      this.getCategory(this.id);
    }
  }

  async getCategory(id) {
    this.loading = true;
    try {
      this.category = await this.categoryService.get(id).toPromise();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onCreate(category: Category) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      await this.categoryService.create(category).toPromise();
      this.message = 'Success! Category created';
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(category: Category) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      await this.categoryService
        .update(this.category._id, category)
        .toPromise();
      this.message = 'Success! Category updated';
      this.category = null;
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }
}