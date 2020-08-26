import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { CategoryTree } from 'src/shared/json/category-tree';
import { ProductPage, Product } from 'src/shared/models/product.model';
import { CartService } from 'src/services/cart.service';
import { Cart, Product_list_cart } from 'src/shared/models/cart.model';
import { ModalService } from 'src/services/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  sideNav = CategoryTree;
  productPage: ProductPage;
  product: Product;
  cart: Cart;
  product_list_cart: Product_list_cart;

  slug: string;
  categoryNav;
  sub_category;
  sub_sub_category;

  prodImageUrl;
  prodThumbUrl;
  loading = false;
  errorMessage = '';

  constructor(
    private productService: ProductService, private cartService: CartService,
    private activeRoute: ActivatedRoute, private modalService: NgbModal
  ) {
    this.slug = activeRoute.snapshot.params['slug'];
    this.prodImageUrl = this.productService.productLink + '/image/';
    this.prodThumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    if (this.slug) {
      // this.cartService.getMyCart();
      this.getCategoryNav(this.slug);
      this.getProductByCategory(this.slug);
    }
    this.cartService.cart$.subscribe(data => {
      this.cart = data;
      if (this.product && this.cart.product_list) {
        this.product_list_cart = this.cart.product_list.find(pl => pl.product._id == this.product._id);
      }
    })
  }

  getCategoryNav(slug) {
    this.categoryNav = this.sideNav.category.find(cat => cat.slug == slug);
  }

  onSideNavClick(data) {
    console.log(data);
    if (data.reset) {
      this.sub_category = null;
      this.sub_sub_category = null;
      this.productPage = null;
      this.getProductByCategory(this.slug);
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
    this.getProductBySubCategory(slug);
  }
  
  onSelectSubSubCategory(slug) {
    this.sub_sub_category = this.sub_category.sub_sub_category.find(ssc => ssc.slug == slug);
    this.getProductBySubSubCategory(this.sub_sub_category.slug);
  }

  async getProductByCategory(category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getByCategorySlug(category_slug, page, limit, sort, order).toPromise();
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

  async getProductBySubSubCategory(sub_sub_category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getBySubSubCategorySlug(sub_sub_category_slug, page, limit, sort, order).toPromise();
      // window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onShortDetails(targetModal, product: Product) {
    this.product = product;
    if (this.cart.product_list && this.cart.product_list.length > 0) {
      this.product_list_cart = this.cart.product_list.find(pl => pl.product._id == product._id);
    }
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'xl',
      scrollable: true
    });
  }

  openModal(targetModal) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }


  onChangePage(page) {
    //   // if (this.sub_category_slug == null) {
    //   //   this.getProductByCategory(this.category.slug, page.pageNumber, page.limit, page.sort, page.order)
    //   // } else {
    //   //   this.getProductBySubCategory(this.sub_category_slug, page.pageNumber, page.limit, page.sort, page.order)
    //   // }
  }

  async onAddToCart(event) {
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService._cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  // onPriceFilter(data) {
  //   console.log('Price filter', data);
  // }
}
