import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/services/shop.service';
import { InventoryService } from 'src/services/inventory.service';
import { ShopPage, Shop } from 'src/shared/models/shop.model';
import { Inventory, InventoryPage } from 'src/shared/models/inventory.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  shop: Shop;
  shopPage: ShopPage;
  inventory: Inventory;
  inventoryPage: InventoryPage;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private shopService: ShopService, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getAllShops();
  }

  async getAllShops(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.shopPage = await this.shopService.getAll(page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getInventoryByShopId(shopId, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.inventoryPage = await this.inventoryService.getInventoryByShop(shopId, page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangeShopPage(page) {
    this.getAllShops(page.pageNumber, page.limit, page.sort, page.order)
  }

  onDetails(id) {
    const value = this.inventoryPage.docs.find((iv) => iv._id == id);
    this.inventory = Object.assign({}, value);
  }

  onEdit(id) {
    // const value = this.inventoryPage.docs.find((iv) => iv._id == id);
    // this.inventory = Object.assign({}, value);
  }

  onChangeInventoryPage(shopId, page) {
    console.log(shopId, page);
    this.getInventoryByShopId(shopId, page.pageNumber, page.limit, page.sort, page.order)
  }

  onSelectShop(id) {
    const value = this.shopPage.docs.find((s) => s._id == id);
    this.shop = Object.assign({}, value);
    this.getInventoryByShopId(id);
  }

  onClose() {
    this.inventoryPage = null;
    this.inventory = null;
    this.shop = null;
  }

}
