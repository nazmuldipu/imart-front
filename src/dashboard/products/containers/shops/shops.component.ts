import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/shared/models/shop.model';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent implements OnInit {
  shop: Shop;
  shops: Shop[] = [];
  imageUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showShopForm = false;

  constructor() {}

  ngOnInit(): void {}
}
