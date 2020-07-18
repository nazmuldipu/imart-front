import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';
import { SubCategory } from 'src/shared/models/sub-category.model';

@Component({
  selector: 'sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.scss']
})
export class SubCategoryFormComponent implements OnChanges {
  @Input() subCategory: SubCategory;
  @Input() categories: Category[];

  @Output() create = new EventEmitter<SubCategory>();
  @Output() update = new EventEmitter<SubCategory>();
  @Output() close = new EventEmitter<Boolean>();

  category: Category;
  form: FormGroup;

  exists = false;
  files: File[] = [];
  errorMessage = '';

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.subCategory && this.subCategory._id) {
      this.exists = true;
      this.category = this.categories.find(cat => cat._id === this.subCategory.category._id);
      const value = {
        categoryId: this.subCategory.category._id,
        ...this.subCategory
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: ['', Validators.required],
      priority: [0, [Validators.required, Validators.min(0)]],
      images: [null],
    });
  }

  uploadFile(event) {
    if (event.target.files.length > 0 && event.target.files.length < 3) {
      const file = event.target.files;
      this.form.patchValue({
        images: file
      });
    } else if (event.target.files.length > 2) {
      this.errorMessage = 'Sub category image limit is 2';
    }
  }

  onCategory(id) {
    this.category = this.categories.find(cat => cat._id === id);
    this.form.controls.categoryId.setValue(id);
  }

  onClear() {
    this.category = null;
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
