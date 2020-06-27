import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'product-style1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-style1.component.html',
  styleUrls: ['./product-style1.component.scss']
})
export class ProductStyle1Component {
  @Input() product: any;  
  currentIndex = 0;

}
