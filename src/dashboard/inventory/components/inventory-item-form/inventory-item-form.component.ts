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

  @Output() addColorStock = new EventEmitter<number>();
  @Output() removeColorStock = new EventEmitter<any>();

  searching = false;
  searchFailed = false;

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

  pushColorStock(i) {
    this.addColorStock.emit(i);
  }

  onRemoveColorStock(i, j) {
    console.log(i, j)
    this.removeColorStock.emit({ item: i, color_stock: j });
  }

}
