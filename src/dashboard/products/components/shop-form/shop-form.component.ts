import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Shop } from 'src/shared/models/shop.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnChanges {
  @Input() shop: Shop;

  @Output() create = new EventEmitter<Shop>();
  @Output() update = new EventEmitter<Shop>();
  @Output() cancel = new EventEmitter<Boolean>();

  form: FormGroup;

  exists = false;
  file: File;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.shop && this.shop._id) {
      this.exists = true;
      const value = {
        ...this.shop
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      owner_number: ['', [Validators.required, Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$'),],
      ],
      address: ['', Validators.required],
      priority: [0, [Validators.required, Validators.min(0)]],
      contact_number: '' ,
      nid: '' ,
      latitude: '' ,
      longitude: '' ,
      trade_license: '' ,
      bank_info: '' ,
      description: '',
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

  onCancel() {
    this.cancel.emit(true);
  }

}
