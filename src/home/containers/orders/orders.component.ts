import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order.service';
import { ProductService } from 'src/services/product.service';
import { Order, OrderPage } from 'src/shared/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  order: Order;
  orderPage: OrderPage;

  thumbUrl;
  loading = false;
  errorMessage = '';

  constructor(private productService: ProductService, private orderService: OrderService) {
    this.thumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getMyOrders();
  }

  async getMyOrders() {
    this.loading = true;
    try {
      this.orderPage = await this.orderService.getMyOrders().toPromise();
      this.order = this.orderPage.docs[0];
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  onSelectOrder(id) {
    this.order = this.orderPage.docs.find(o => o._id == id);
  }
}
