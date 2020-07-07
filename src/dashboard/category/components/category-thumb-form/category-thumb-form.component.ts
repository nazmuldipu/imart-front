import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'category-thumb-form',
  templateUrl: './category-thumb-form.component.html',
  styleUrls: ['./category-thumb-form.component.scss'],
})
export class CategoryThumbFormComponent {
  @Input() name: String;
  @Output() create = new EventEmitter<Category>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      thumb: [null],
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      thumb: file,
    });
    this.form.get('thumb').updateValueAndValidity();
  }
  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
      this.form.reset();
    }
  }
}
