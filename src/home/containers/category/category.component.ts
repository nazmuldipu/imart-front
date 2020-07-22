import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavWidget, Products } from 'src/shared/json/dummy';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/shared/models/category.model';
import { Product, ProductPage } from 'src/shared/models/product.model';
import { SubCategoryService } from 'src/services/sub-category.service';
import { SubCategory, SubCategoryPage } from 'src/shared/models/sub-category.model';
import { ProductService } from 'src/services/product.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  id;
  category: Category;
  subCategories: SubCategoryPage;
  catImageUrl = '';
  prodImageUrl = '';
  prodThumbUrl = '';
  productPage: ProductPage;
  loading = false;
  errorMessage = '';
  sub_category_slug = '';
  sideNavData = SideNavWidget;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productService: ProductService,
    private utilService: UtilService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.params['id'];
    this.catImageUrl = this.categoryService.catLink + '/image/';
    this.prodImageUrl = this.productService.productLink + '/image/'
    this.prodThumbUrl = this.productService.productLink + '/thumb/';
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

  async getProductByCategory(category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getByCategorySlug(category_slug, page, limit, sort, order).toPromise();
      // this.productPage.docs.sort(this.utilService.dynamicSortObject('priority'));
      this.sub_category_slug = null;
      // window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getProductBySubCategory(sub_category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getBySubCategorySlug(sub_category_slug, page, limit, sort, order).toPromise();
      // this.productPage.docs.sort(this.utilService.dynamicSortObject('priority'));
      // window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangePage(page) {
    if (this.sub_category_slug == null) {
      this.getProductByCategory(this.category.slug, page.pageNumber, page.limit, page.sort, page.order)
    } else {
      this.getProductBySubCategory(this.sub_category_slug, page.pageNumber, page.limit, page.sort, page.order)
    }
  }

  onSideNavClick(data) {
    this.sub_category_slug = data.sub_category
    this.getProductBySubCategory(data.sub_category);
  }

  onPriceFilter(data) {
    console.log('Price filter', data);
  }
}
