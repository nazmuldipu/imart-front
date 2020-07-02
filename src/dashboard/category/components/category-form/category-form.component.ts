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
  file:File;
  
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
    });
  }

  fileChange($event) {
    let reader = new FileReader();
    if($event.target.files && $event.target.files.length > 0) {
      let file = $event.target.files[0];
      this.file = file
    }
  }

  submit() {
    if (this.form.valid) {
      if (this.exists) {
        this.update.emit(this.form.value);
      } else {
        const obj = this.form.value;
        obj.image = this.file;
        console.log(obj);
        this.create.emit(this.form.value);
      }
      this.exists = false;
      this.form.reset();
    } 
  }
}
