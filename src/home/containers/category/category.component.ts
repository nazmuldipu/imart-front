import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavWidget, Products } from 'src/shared/json/dummy';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  id;
  category: Category;
  imageUrl=''
  products = Products;
  loading = false;
  errorMessage = '';
  sideNavData = SideNavWidget;

  constructor(
    private categoryService: CategoryService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.params['id'];
    this.imageUrl = this.categoryService.catLink + '/image/';
  }

  ngOnInit(): void {
    if (this.id) {
      this.getCategory(this.id);
    }
  }

  async getCategory(id) {
    this.loading = true;
    try {
      this.category = await this.categoryService.get(id).toPromise();
      this.sideNavData.title = this.category.name;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onSideNavClick(data) {
    console.log(data);
  }
  onPriceFilter(data) {
    console.log('Price filter', data);
  }
}
