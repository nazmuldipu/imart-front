import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Inventory } from 'src/shared/models/inventory.model';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap, catchError } from 'rxjs/operators';
import { Shop } from 'src/shared/models/shop.model';
import { ShopService } from 'src/services/shop.service';
import { UserService } from 'src/services/user.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnChanges {
  @Input() inventory: Inventory
  @Input() shopList: Shop[];

  @Output() create = new EventEmitter<Inventory>();
  @Output() shop = new EventEmitter<string>();

  form: FormGroup;
  exists = false;
  mouseoverShifting = false;

  searching = false;
  searchFailed = false;

  searchShop = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.shopService.search(term).pipe(
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

  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.userService.search(term).pipe(
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



  shopFormatter = (x) => {
    if (x)
      return `${x.name} [${x.owner_number}]`;
  }
  userFormatter = (x) => {
    if (x)
      return `${x.name} [${x.phone}]`;
  }

  constructor(private fb: FormBuilder, private shopService: ShopService, private userService: UserService) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.inventory) {

    }
  }

  createForm() {
    this.form = this.fb.group({
      inventoryType: ['', Validators.required],
      reference: ['', Validators.required],
      shop: ['', Validators.required],
      supplier: ['', Validators.required],
      items: this.fb.array([this.createInventoryItem()])
    });
  }

  pushInventoryItem() {
    const control = <FormArray>this.form.get('items');
    control.push(this.createInventoryItem());
  }

  createInventoryItem() {
    return this.fb.group({
      product: ['', Validators.required],
      size: ['', Validators.required],
      color_stock: this.fb.array([this.createColorStock()])
    });
  }

  pushColorStock() {
    const control = <FormArray>this.form.get('items').get('color_stock');
    control.push(this.createColorStock());
  }

  addColorStock(i) {
    const control = (<FormArray>this.form.controls['items']).at(i).get('color_stock') as FormArray;
    control.push(this.createColorStock());

  }

  onRemoveColorStock(event) {
    console.log('onRemoveColorStock', event);
    const control = (<FormArray>this.form.controls['items']).at(event.item).get('color_stock') as FormArray;
    control.removeAt(event.color_stock);
  }

  createColorStock() {
    return this.fb.group({
      color: ['', Validators.required],
      quantity: ['', Validators.required],
      purchase_price: ['', Validators.required]
    })
  }

  onShopSearch(event: string) {
    if (event.length > 3) {
      this.shop.emit(event);
    }
  }

  submit() {
    if(this.form.valid){
      this.create.emit(this.form.value);
    }
  }

}
