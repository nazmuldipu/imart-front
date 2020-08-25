import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Cart } from 'src/shared/models/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = 'api/carts';

  constructor(private dataSource: RestDataService) { }

  addToCart(cart): Observable<Cart> {
    return this.dataSource.sendRequest('POST', this.cartUrl + '/add', cart, true, null);
  }

  getMyCart(): Observable<Cart> {
    return this.dataSource.sendRequest('GET', this.cartUrl + '/my', null, true, null);
  }

}
