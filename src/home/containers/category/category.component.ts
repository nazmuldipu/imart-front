import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavWidget } from 'src/shared/json/dummy';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category;

  sideNavData = SideNavWidget;

  constructor(private activeRoute: ActivatedRoute) {
    this.category = activeRoute.snapshot.params['category'];
  }

  ngOnInit(): void {}

  onSideNavClick(data){
    console.log(data);
  }
}
