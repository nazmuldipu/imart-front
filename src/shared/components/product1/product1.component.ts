import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss'],
})
export class Product1Component implements OnInit {
  @Input() product:any;

  imageIndex = 0;
  constructor() {}

  ngOnInit(): void {}
  onSlideImage(index) {
    this.imageIndex = index;
  }
}
