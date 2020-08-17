import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { SideNavigation } from 'src/shared/json/side-nav';
import { ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  sideNav = SideNavigation;
  productPage: ProductPage;

  slug: string;
  categoryNav;
  sub_category;
  sub_sub_category;

  loading = false;
  errorMessage = '';

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {
    this.slug = activeRoute.snapshot.params['slug'];
  }

  ngOnInit(): void {
    if (this.slug) {
      this.getCategoryNav(this.slug);
    }
  }

  getCategoryNav(slug) {
    this.categoryNav = this.sideNav.category.find(cat => cat.slug == slug);
  }

  async getProductByCategory(category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getByCategorySlug(category_slug, page, limit, sort, order).toPromise();
      // this.productPage.docs.sort(this.utilService.dynamicSortObject('priority'));
      // this.sub_category_slug = null;
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
      // window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangePage(page) {
    // if (this.sub_category_slug == null) {
    //   this.getProductByCategory(this.category.slug, page.pageNumber, page.limit, page.sort, page.order)
    // } else {
    //   this.getProductBySubCategory(this.sub_category_slug, page.pageNumber, page.limit, page.sort, page.order)
    // }
  }

  onSideNavClick(data) {
    if(data.reset){
      this.sub_category = null;
      this.sub_sub_category = null;
      this.productPage = null;
    }
    if (data.sub_category) {
      this.onSelectSubCategory(data.sub_category);
    }
    if (data.sub_sub_category) {
      this.onSelectSubSubCategory(data.sub_sub_category);
    }
  }

  onSelectSubCategory(slug) {
    this.sub_category = this.categoryNav.sub_category.find(sc => sc.slug == slug);
    if (this.sub_category && this.sub_category.sub_sub_category.length == 0) {
      console.log('//TODO: Load product by sub_category', this.sub_category.slug);
    }
  }
  onSelectSubSubCategory(slug) {
    this.sub_sub_category = this.sub_category.sub_sub_category.find(ssc => ssc.slug == slug);
    console.log('//TODO: Load product by sub_sub_category', this.sub_sub_category.slug);
  }

  onPriceFilter(data) {
    console.log('Price filter', data);
  }
}
