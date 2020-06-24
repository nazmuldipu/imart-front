import { Component, OnInit } from '@angular/core';
import { BestSellers } from 'src/shared/json/dummy';

@Component({
  selector: 'best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent implements OnInit {
  titleCollapse = true;
  bestSellers = BestSellers

  constructor() {}

  ngOnInit(): void {}

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
  }
}
