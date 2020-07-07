import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnChanges {
  @Input() category: Category;

  @Output() create = new EventEmitter<Category>();
  @Output() update = new EventEmitter<Category>();

  form: FormGroup;

  exists = false;
  file: File;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.category && this.category._id) {
      this.exists = true;
      const value = {
        ...this.category
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      priority: [0, [Validators.required, Validators.min(0)]],
      image: [null]
    });
  }

  // fileChange($event) {
  //   let reader = new FileReader();
  //   if($event.target.files && $event.target.files.length > 0) {
  //     let file = $event.target.files[0];
  //     this.file = file
  //   }
  // }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity()
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
}
