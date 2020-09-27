import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Cart } from 'src/shared/models/cart.model';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show = false;
  cart: Cart;

  constructor(private cartService: CartService, public auth: AuthService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(data => {
      this.cart = data;
    })
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  onLogout() {
    this.cartService._cartSource.next(null);
    this.auth.logout();
  }
}
