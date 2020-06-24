import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {
  titleCollapse = true;
  minValue=0;
  maxValue=1000;
  constructor() { }

  ngOnInit(): void {
  }

  widgetTitleCollapse(){
    this.titleCollapse = !this.titleCollapse
  }
}
