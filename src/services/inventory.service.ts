import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Inventory, InventoryPage } from 'src/shared/models/inventory.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventoryUrl = 'api/inventory';

  constructor(private dataSource: RestDataService) { }

  create(event: Inventory): Observable<Inventory> {
    // const items = [];
    // for (let i = 0; i < event.items.length; i++) {
    //   const item = { productId: event.items[i].product._id, size: event.items[i].size, color_stock: event.items[i].color_stock }
    //   items.push(item);
    // }
    // const value = { inventoryType: event.inventoryType, reference: event.reference, shopId: event.shop._id, supplierId: event.supplier._id, items }
    // console.log(value);

    return this.dataSource.sendRequest('POST', this.inventoryUrl, event, true, null);
  }

  getInventory(id: string): Observable<Inventory> {
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/${id}`, null, true, null);
  }

  getInventoryByStorehouse(storehouseId: string, page: number, limit: number, sort: string, order: string): Observable<InventoryPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/storehouse/${storehouseId}`, null, true, params);
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }

}
