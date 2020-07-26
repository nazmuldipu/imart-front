import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/shared/models/category.model';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  categories: Category[] = [];
  category: Category;
  thumbCategory: Category;
  imageUrl = '';
  thumbUrl = '';
  loading = false;
  message = '';
  errorMessage = '';
  // /api/categories/image/5f02eb94629037161c106085
  constructor(
    private categoryService: CategoryService,
    private utilService: UtilService
  ) {
    this.imageUrl = this.categoryService.catLink + '/image/';
    this.thumbUrl = this.categoryService.catLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

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

  onEdit(id) {
    this.thumbCategory = null;
    const value = this.categories.find((c) => c._id == id);
    this.category = Object.assign({}, value);
  }
  onThumbnail(id){
    this.category = null;
    const value = this.categories.find((c) => c._id == id);
    this.thumbCategory = Object.assign({}, value);

  }

  async onCreate(category: Category) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      console.log(category);
      const resp = await this.categoryService.create(category).toPromise();
      this.message = 'Category created';
      this.categories.push(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(category: Category) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const cid = this.category._id;
    try {
      const resp = await this.categoryService.update(cid, category).toPromise();
      this.message = 'Category updated';
      // this.categories.splice(
      //   this.categories.findIndex((c) => c._id == cid),
      //   1,
      //   resp
      // );
      this.category = null;
      this.getAllCategory();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onThumbUpload(event) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const cid = this.thumbCategory._id;
    try {
      const resp = await this.categoryService.postThumb(cid, event).toPromise();
      this.thumbCategory = null;
      this.message = 'Thumb uploaded';
    } catch (err) {
      this.errorMessage = err;
    }

    this.loading = false;
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      console.log('onDelete ', id);
      try {
        const res = await this.categoryService.delete(id).toPromise();
        this.message = 'Category deleted';
        this.categories.splice(
          this.categories.findIndex((c) => c._id == id),
          1
        );
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  onClose() {
    this.category = null;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
