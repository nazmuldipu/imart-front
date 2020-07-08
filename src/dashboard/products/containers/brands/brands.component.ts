import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/shared/models/brand.model';
import { BrandService } from 'src/services/brand.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brand: Brand;
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

  async getAllBrand() {
    this.loading = true;
    try {
      this.brands = await this.brandService.getAll().toPromise();
      this.brands.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onShowBrandForm() {
    this.showBrandForm = true;
  }

  onBrandFormCancel() {
    this.onClose();
  }

  onEdit(id) {
    const value = this.brands.find((c) => c._id == id);
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
      this.brands.push(resp);
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
      this.brand = null;
      this.getAllBrand();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      console.log('onDelete ', id);
      try {
        const res = await this.brandService.delete(id).toPromise();
        this.message = 'Brand deleted';
        this.brands.splice(
          this.brands.findIndex((c) => c._id == id),
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
