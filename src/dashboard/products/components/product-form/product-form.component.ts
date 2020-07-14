import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';
import { Brand } from 'src/shared/models/brand.model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Input() categories: Category[];
  @Input() brands: Brand[];

  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() close = new EventEmitter<Boolean>();

  brand: Brand;
  category: Category;
  form: FormGroup;

  exists = false;
  file: File;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      priority: [0, [Validators.required, Validators.min(0)]],
      image: [null]
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity()
  }

  onCategory(id) {
    this.category = this.categories.find(cat => cat._id === id);
    this.form.controls.categoryId.setValue(id);
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
