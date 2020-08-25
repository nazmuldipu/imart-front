import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss'],
})
export class Product1Component implements OnInit {
  @Input() product: Product;
  @Input() imageUrl: string;
  @Input() thumbUrl: string;

  @Output() cart  = new EventEmitter<string>();
  @Output() shortDetails  = new EventEmitter<Product>();

  imageIndex = 0;
  constructor() { }

  ngOnInit(): void { }

  onSlideImage(index) {
    this.imageIndex = index;
  }

  counter(i: number) {
    return new Array(i);
  }

  addToCart(id){
    this.cart.emit(id);
  }

  onShortDetails(){
    this.shortDetails.emit(this.product);
  }
}
