import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit {
  @Output() resp = new EventEmitter<any>();

  titleCollapse = true;
  minValue: number = 50;
  maxValue: number = 200;
  
  constructor() {}

  ngOnInit(): void {}

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
  }

  onFilter() {
    this.resp.emit({ min: this.minValue, max: this.maxValue });
  }
}
