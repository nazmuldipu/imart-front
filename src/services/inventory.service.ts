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

  create(inventory: Inventory): Observable<Inventory> {
    return this.dataSource.sendRequest('POST', this.inventoryUrl, inventory, true, null);
  }

  getInventory(id: string): Observable<Inventory> {
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/${id}`, null, true, null);
  }

  getInventoryByShop(shopId: string, page: number, limit: number, sort: string, order: string): Observable<InventoryPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/shop/${shopId}`, null, true, params);
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }

}
