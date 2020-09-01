import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { CartService } from 'src/services/cart.service';
import { Cart } from 'src/shared/models/cart.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  cart: Cart;
  shortCart = true;
  thumbUrl;

  loading = false;
  errorMessage = '';

  constructor(public auth: AuthService, private cartService: CartService,
    private productService: ProductService) {
    this.thumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(data => {
      this.cart = data;
      if (data && data.product_list && data.product_list.length) {
        this.shortCart = false
      } else {
        this.shortCart = true;
      }
    })
  }

  onLogout() {
    this.cartService._cartSource.next(null);
    this.auth.logout();
  }

  onDetails() {
    this.shortCart = !this.shortCart;
  }

  onRemoveFromCart(product_id) {
    const item = this.cart.product_list.find(pl => pl.product._id === product_id);
    this.onAddToCart(-1 * item.quantity, product_id);
  }

  async onAddToCart(quantity, product_id) {
    const value = { "productId": product_id, "quantity": quantity }
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(value).toPromise();
      this.cartService._cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

}
