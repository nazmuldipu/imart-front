import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'category-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent {
  @Input() data;
  @Output() select = new EventEmitter<any>();

  onItemClik(slug) {
    this.select.emit(slug);
  }
}
