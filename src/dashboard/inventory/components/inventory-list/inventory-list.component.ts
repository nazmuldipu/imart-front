import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventoryPage } from 'src/shared/models/inventory.model';

@Component({
  selector: 'inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  @Input() inventoryPage: InventoryPage;

  @Output() details = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDetails(id){
    this.details.emit(id);
  }

}
