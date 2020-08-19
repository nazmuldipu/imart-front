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
  @Input() categories;
  @Input() brands;

  @Output() subcat = new EventEmitter<Category>();
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() close = new EventEmitter<Boolean>();
  @Output() brandSearch = new EventEmitter<string>();

  brand: Brand;
  category;
  subCategory;
  subCategories;
  subSubCategory;
  subSubCategories;
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
    if (this.product && this.product.slug) {
      this.exists = true;
      this.category = this.categories.find(cat => cat.slug === this.product.category.slug);
      this.brand = this.brands.find(b => b.slug === this.product.brand.slug);
      this.getAllSubCategoryByCategory(this.category.slug);
      this.form.reset();
      const value = {
        categoryId: this.product.category.slug,
        // subCategoryId: this.product?.sub_category?._id,
        brandId: this.product.brand.slug,
        ...this.product
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      size: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      sub_category: ['', Validators.required],
      sub_sub_category: [''],
      brand: ['', Validators.required],
      barcode: ['', [Validators.required, Validators.min(0)]],
      point: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      old_price: [0, [Validators.required, Validators.min(0)]],
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

  onCategory(slug) {
    this.category = this.categories.find(cat => cat.slug === slug);
    // this.subcat.emit(this.category);
    this.form.controls.category.setValue({ "name": this.category.name, "image_urls": this.category.image_urls });
    this.getAllSubCategoryByCategory(this.category.slug);
  }

  onSubCategory(slug) {
    this.subCategory = this.subCategories.find(sc => sc.slug === slug);
    this.form.controls.sub_category.setValue({ "name": this.subCategory.name, "image_urls": this.subCategory.image_urls });
    this.getAllSubCategoryBySubCategory(this.subCategory.slug)
  }

  onSubSubCategory(slug) {
    this.subSubCategory = this.subSubCategories.find(ssc => ssc.slug === slug);
    this.form.controls.sub_sub_category.setValue({ "name": this.subSubCategory.name, "image_urls": this.subSubCategory.image_urls })
  }

  onSearchBrand(event) {
    this.brandSearch.emit(event.name);
  }

  getAllSubCategoryByCategory(cat_slug: string) {
    this.subCategories = this.category.sub_category;
  }

  getAllSubCategoryBySubCategory(sub_cat_slug: string) {
    this.subSubCategories = this.subCategory.sub_sub_category;
  }

  onBrand(slug) {
    this.brand = this.brands.find(b => b.slug === slug);
    this.form.controls.brand.setValue({ "name": this.brand.name, "image_urls": this.brand.image_urls });
  }

  onClear() {
    this.exists = false;
    this.category = null;
    this.brand = null;
    this.subCategory = null;
    this.form.reset();
  }

  onCategoryChange() {
    this.category = null;
    this.subCategory = null;
    this.subSubCategory = null;
  }

  onSubCategoryChange() {
    this.subCategory = null;
    this.subSubCategory = null;
  }

  onSubSubCategoryChange() {
    this.subSubCategory = null;
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
