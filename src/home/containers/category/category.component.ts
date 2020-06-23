import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category;
  constructor(private activeRoute: ActivatedRoute) {
    this.category = activeRoute.snapshot.params['category'];
  }

  ngOnInit(): void {}
}
