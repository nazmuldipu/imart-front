import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Inventory } from 'src/shared/models/inventory.model';

@Component({
  selector: 'inventory-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.scss']
})
export class InventoryDetailsComponent implements OnChanges {
  @Input() inventory: Inventory;

  total;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.inventory) {
      let totalQ = 0, totalP = 0;
      for (let i = 0; i < this.inventory.items.length; i++) {
        const items = this.inventory.items[i];
        for (let j = 0; j < items.color_stock.length; j++) {
          const cs = items.color_stock[0];
          totalQ += cs.quantity;
          totalP += cs.purchase_price * cs.quantity;
        }
      }
      this.total = { price: totalP, quantity: totalQ };
    }
  }

  onPrint() {
    console.log('On print');
    (window as any).print();
  }
}
