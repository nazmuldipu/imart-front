import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {
  @Input() product: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
