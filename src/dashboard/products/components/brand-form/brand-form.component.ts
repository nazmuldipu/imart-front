import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Brand } from 'src/shared/models/brand.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnChanges {
  @Input() brand: Brand;

  @Output() create = new EventEmitter<Brand>();
  @Output() update = new EventEmitter<Brand>();
  @Output() cancel = new EventEmitter<Boolean>();

  form: FormGroup;

  exists = false;
  file: File;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.brand && this.brand._id) {
      this.exists = true;
      const value = {
        ...this.brand
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

  onCancel(){
    this.cancel.emit(true);
  }
}
