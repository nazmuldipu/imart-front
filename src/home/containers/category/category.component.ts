import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavWidget, Products } from 'src/shared/json/dummy';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category;

  products = Products;

  sideNavData = SideNavWidget;

  constructor(private activeRoute: ActivatedRoute) {
    this.category = activeRoute.snapshot.params['category'];
    this.sideNavData.title = this.category;
  }

  ngOnInit(): void {}

  onSideNavClick(data) {
    console.log(data);
  }
  onPriceFilter(data) {
    console.log('Price filter', data);
  }
}
