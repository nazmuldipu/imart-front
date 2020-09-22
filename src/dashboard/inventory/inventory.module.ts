import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { IndexComponent } from './containers/index/index.component';
import { AddComponent } from './containers/add/add.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryDetailsComponent } from './components/inventory-details/inventory-details.component';
import { InventoryItemFormComponent } from './components/inventory-item-form/inventory-item-form.component';
import { StocksComponent } from './containers/stocks/stocks.component';
import { ProductStockListComponent } from './components/product-stock-list/product-stock-list.component';
import { TransferComponent } from './containers/transfer/transfer.component';
import { ConvertComponent } from './containers/convert/convert.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'convert', component: ConvertComponent },
];

@NgModule({
  declarations: [
    IndexComponent,
    AddComponent,
    InventoryListComponent,
    InventoryFormComponent,
    InventoryDetailsComponent,
    InventoryItemFormComponent,
    StocksComponent,
    ProductStockListComponent,
    TransferComponent,
    ConvertComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class InventoryModule {}
