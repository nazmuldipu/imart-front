import { Component, OnInit } from '@angular/core';
import { Brand, BrandPage } from 'src/shared/models/brand.model';
import { BrandService } from 'src/services/brand.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brand: Brand;
  brandPage: BrandPage;
  brands: Brand[] = [];
  imageUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showBrandForm = false;

  constructor(
    private brandService: BrandService,
    private utilService: UtilService
  ) {
    this.imageUrl = this.brandService.brandLink + '/image/';
  }

  ngOnInit(): void {
    this.getAllBrand();
  }

  async getAllBrand(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.brandPage = await this.brandService.getAll(page, limit, sort, order).toPromise();
      this.brands = this.brandPage.docs;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onSearch(event) {
    if (event.length > 2) {
      this.loading = true;
      this.brandPage = null;
      try {
        await this.brandService.search(event.toLowerCase()).subscribe(data => {
          this.brands = data ? data : [];
        });
        // console.log(value);
      } catch (error) {
        this.errorMessage = error;
      }
      this.loading = false
    } else if (event.length == 0) {
      this.getAllBrand();
    }
  }

  onChangePage(page) {
    this.getAllBrand(page.pageNumber, page.limit, page.sort, page.order);
  }

  onShowBrandForm() {
    this.showBrandForm = true;
  }

  onBrandFormCancel() {
    this.onClose();
  }

  onEdit(id) {
    const value = this.brandPage.docs.find((c) => c._id == id);
    this.brand = Object.assign({}, value);
    this.showBrandForm = true;
  }

  async onCreate(brand: Brand) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.brandService.create(brand).toPromise();
      this.message = 'Category created';
      this.brandPage.docs.push(resp);
      this.showBrandForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(brand: Brand) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const bid = this.brand._id;
    try {
      const resp = await this.brandService.update(bid, brand).toPromise();
      this.message = 'Brand updated';
      this.brand = null;
      this.showBrandForm = false;
      this.getAllBrand();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      try {
        const res = await this.brandService.delete(id).toPromise();
        this.message = 'Brand deleted';
        this.brandPage.docs.splice(
          this.brandPage.docs.findIndex((c) => c._id == id),
          1
        );
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  onClose() {
    this.brand = null;
    this.showBrandForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
