import { Component, OnInit, Input } from '@angular/core';
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

  imageIndex = 0;
  constructor() { }

  ngOnInit(): void { }

  onSlideImage(index) {
    this.imageIndex = index;
  }

  counter(i: number) {
    return new Array(i);
  }
}
