import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavWidget, Products } from 'src/shared/json/dummy';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/shared/models/category.model';
import { Product } from 'src/shared/models/product.model';
import { SubCategoryService } from 'src/services/sub-category.service';
import { SubCategory } from 'src/shared/models/sub-category.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  id;
  category: Category;
  subCategories: SubCategory;
  catImageUrl = '';
  prodImageUrl = '';
  products: Product[] = [];
  loading = false;
  errorMessage = '';
  sideNavData = SideNavWidget;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.params['id'];
    this.catImageUrl = this.categoryService.catLink + '/image/';
    this.prodImageUrl = this.productService.productLink + '/image/'
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
      this.getSubCategoryByCategorySlug(this.category.slug);
      this.getProductByCategory(this.category.slug);
      this.sideNavData.title = this.category.name;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getSubCategoryByCategorySlug(category_slug: string) {
    this.loading = true;
    try {
      this.subCategories = await this.subCategoryService.getByCategorySlug(category_slug).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getProductByCategory(category_slug: string) {
    this.loading = true;
    try {
      this.products = await this.productService.getByCategorySlug(category_slug).toPromise();
      window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getProductBySubCategory(sub_category_slug: string) {
    this.loading = true;
    try {
      this.products = await this.productService.getBySubCategorySlug(sub_category_slug).toPromise();
      window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onSideNavClick(data) {
    this.getProductBySubCategory(data.sub_category);
  }

  onPriceFilter(data) {
    console.log('Price filter', data);
  }
}
