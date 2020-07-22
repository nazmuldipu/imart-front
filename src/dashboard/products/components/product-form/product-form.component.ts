import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';
import { Brand } from 'src/shared/models/brand.model';
import { SubCategory, SubCategoryPage } from 'src/shared/models/sub-category.model';
import { SubCategoryService } from 'src/services/sub-category.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product;
  @Input() categories: Category[];
  @Input() brands: Brand[];
  
  @Output() subcat = new EventEmitter<Category>();
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() close = new EventEmitter<Boolean>();
  
  brand: Brand;
  category: Category;
  subCategory: SubCategory;
  subCategories: SubCategoryPage;
  form: FormGroup;

  exists = false;
  files: File[] = [];
  errorMessage = '';
  loading = false;

  constructor(private fb: FormBuilder, private subCategoryService: SubCategoryService) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes.su)
    if (this.product && this.product._id) {
      console.log(changes);
      this.exists = true;
      this.category = this.categories.find(cat => cat._id === this.product.category._id);
      this.brand = this.brands.find(b => b._id === this.product.brand._id);
      this.subCategory = this.subCategories.docs.find(sb => sb._id === this.product?.sub_category?._id)
      const value = {
        categoryId: this.product.category._id,
        // subCategoryId: this.product?.sub_category?._id,
        brandId: this.product.brand._id,
        ...this.product
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      priority: [0, [Validators.required, Validators.min(0)]],
      images: [null],
      thumb: [null]
    });
  }

  uploadFile(event) {
    if (event.target.files.length > 0 && event.target.files.length < 5) {
      const file = event.target.files;
      this.form.patchValue({
        images: file
      });
    } else if (event.target.files.length > 4) {
      this.errorMessage = 'Product image limit is 4';
    }
  }

  uploadThumb(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      thumb: file
    });
    this.form.get('thumb').updateValueAndValidity()
  }

  onCategory(id) {
    this.category = this.categories.find(cat => cat._id === id);
    // this.subcat.emit(this.category);
    this.form.controls.categoryId.setValue(id);
    console.log(this.category);
    this.getAllSubCategoryByCategory(this.category.slug);
  }

  onSubCategory(id) {
    this.subCategory = this.subCategories.docs.find(sc => sc._id === id);
    this.form.controls.subCategoryId.setValue(id);
    // this.getAllSubCategoryByCategory()
  }


  async getAllSubCategoryByCategory(cat_slug: string) {
    this.loading = true;
    try {
      this.subCategories = await this.subCategoryService.getByCategorySlug(cat_slug).toPromise();
      console.log(this.subCategories);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onBrand(id) {
    this.brand = this.brands.find(b => b._id === id);
    this.form.controls.brandId.setValue(id);
  }

  onClear() {
    this.category = null;
    this.brand = null;
    this.subCategory = null;
    this.form.reset();
  }

  onSubCategoryChange() {
    this.subCategory = null;
  }
  onCategoryChange() {
    this.category = null;
    this.subCategory = null;
  }
  onBrandChange() {
    this.brand = null;
  }

  submit() {
    if (this.form.valid) {
      if (this.exists) {
        this.update.emit(this.form.value);
      } else {
        this.create.emit(this.form.value);
      }
      this.exists = false;
      this.form.reset();
    }
  }

  onClose() {
    this.close.emit();
  }
}
