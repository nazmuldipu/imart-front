import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Brand } from 'src/shared/models/brand.model';

@Component({
  selector: 'brand-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent{
  @Input() brands: Brand[];
  @Input() imageUrl: string;

  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onDelete(event) {
    this.delete.emit(event);
  }

  onEdit(event) {
    this.edit.emit(event);
  }
}
