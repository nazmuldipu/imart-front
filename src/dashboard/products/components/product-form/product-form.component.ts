import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';
import { Brand } from 'src/shared/models/brand.model';
import { SubCategory } from 'src/shared/models/sub-category.model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product;
  @Input() categories: Category[];
  @Input() subCategories: SubCategory[];
  @Input() brands: Brand[];

  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() close = new EventEmitter<Boolean>();

  brand: Brand;
  category: Category;
  subCategory: SubCategory;
  form: FormGroup;

  exists = false;
  files: File[] = [];
  errorMessage = '';

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product && this.product._id) {
      this.exists = true;
      this.category = this.categories.find(cat => cat._id === this.product.category._id);
      this.brand = this.brands.find(b => b._id === this.product.brand._id);
      this.subCategory = this.subCategories.find(sb => sb._id === this.product?.sub_category?._id)
      const value = {
        categoryId: this.product.category._id,
        subCategoryId: this.product?.sub_category?._id,
        brandId: this.product.brand._id,
        ...this.product
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
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
    this.form.controls.categoryId.setValue(id);
  }

  onSubCategory(id) {
    this.subCategory = this.subCategories.find(sc => sc._id === id);
    this.form.controls.subCategoryId.setValue(id);
  }

  onBrand(id) {
    this.brand = this.brands.find(b => b._id === id);
    this.form.controls.brandId.setValue(id);
  }

  onClear() {
    this.category = null;
    this.brand = null;
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
