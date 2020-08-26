import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Cart } from 'src/shared/models/cart.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = 'api/carts';

  _cartSource = new BehaviorSubject<Cart>({} as Cart);
  cart$ = this._cartSource.asObservable();

  constructor(private dataSource: RestDataService, public auth: AuthService, private router: Router) { }

  addToCart(cart): Observable<Cart> {
    if (this.auth.isAuthenticated())
      return this.dataSource.sendRequest('POST', this.cartUrl + '/add', cart, true, null);
    else
      this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
  }

  getMyCart() {
    this.dataSource.sendRequest('GET', this.cartUrl + '/my', null, true, null)
      .pipe(take(2))
      .subscribe(
        (data) => {
          this._cartSource.next(data);
        },
        (error) => {
          console.log('get Cart ERROR');
          console.log(error);
        }
      );
  }

}
