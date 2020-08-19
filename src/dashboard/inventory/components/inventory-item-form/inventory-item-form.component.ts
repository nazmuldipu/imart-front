import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'inventory-item-form',
  templateUrl: './inventory-item-form.component.html',
  styleUrls: ['./inventory-item-form.component.scss']
})
export class InventoryItemFormComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() removeItem = new EventEmitter<any>();

  searching = false;
  searchFailed = false;
  total = 0;

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.productService.search(term).pipe(
          tap((data) => {
            this.searchFailed = false;
            data
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  productFormatter = (x) => x.name;

  onRemoveItem(i) {
    this.removeItem.emit(i);
  }

  updateTotal() {
    const control = <FormArray>this.parent.get('items');
    console.log('updateTotal size = ', control.length);
    console.log(control);
    let t = 0;
    for (let i = 0; i < control.length; i++) {
      console.log(control.value[i])
      t += control.value[i].quantity * control.value[i].purchase_price;
    }
    this.total = t;
  }
}
