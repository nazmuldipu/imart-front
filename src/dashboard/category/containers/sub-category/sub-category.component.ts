import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/services/sub-category.service';
import { SubCategory } from 'src/shared/models/sub-category.model';
import { Category } from 'src/shared/models/category.model';
import { UtilService } from 'src/services/util.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  subCategory: SubCategory;
  subCategories: SubCategory[] = [];
  categories: Category[];
  imageUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showSubCategoryForm = false;

  constructor(private subCategoryService: SubCategoryService, private categoryService: CategoryService, 
    private utilService: UtilService) {
    this.imageUrl = this.subCategoryService.subCatLink + '/image/';
  }

  ngOnInit(): void {
    this.getAllSubCategories();
    this.getAllCategory();
  }

  async getAllSubCategories() {
    this.loading = true;
    try {
      this.subCategories = await this.subCategoryService.getAll().toPromise();
      this.subCategories.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
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

  onShowSubCategoryForm() {
    this.showSubCategoryForm = true;
  }

  onEdit(id) {
    const value = this.subCategories.find((c) => c._id == id);
    this.subCategory = Object.assign({}, value);
    this.showSubCategoryForm = true;
  }

  async onCreate(subCategory: SubCategory) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.subCategoryService.create(subCategory).toPromise();
      this.message = 'Sub Category created';
      this.subCategories.push(resp);
      this.showSubCategoryForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(subCategory: SubCategory) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const bid = this.subCategory._id;
    try {
      const resp = await this.subCategoryService.update(bid, subCategory).toPromise();
      this.message = 'Brand updated';
      this.subCategory = null;
      this.showSubCategoryForm = false;
      this.getAllSubCategories();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      try {
        const res = await this.subCategoryService.delete(id).toPromise();
        this.message = 'Sub Category deleted';
        this.subCategories.splice(
          this.subCategories.findIndex((c) => c._id == id),
          1
        );
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  onClose() {
    this.subCategory = null;
    this.showSubCategoryForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }

}
