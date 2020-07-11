import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/shared/models/shop.model';

@Component({
  selector: 'shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnInit {
  @Input() shop: Shop;

  constructor() { }

  ngOnInit(): void {
  }

}
