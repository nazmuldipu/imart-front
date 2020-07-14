import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/shared/models/product.model';
import { ToastService } from 'src/services/toast.service';
import { UtilService } from 'src/services/util.service';
import { Category } from 'src/shared/models/category.model';
import { CategoryService } from 'src/services/category.service';
import { BrandService } from 'src/services/brand.service';
import { Brand } from 'src/shared/models/brand.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;
  products: Product[] = [];
  categories: Category[] = [];
  brands: Brand[] = [];
  imageUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showProductForm = true;

  constructor(private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private utilService: UtilService,
    public toastService: ToastService) {
    this.imageUrl = this.productService.productLink + '/image/';
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
    this.getAllBrand();
  }

  async getAllProducts() {
    this.loading = true;
    try {
      this.products = await this.productService.getAll().toPromise();
      this.products.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getAllCategory() {
    this.loading = true;
    try {
      this.categories = await this.categoryService.getAll().toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getAllBrand() {
    this.loading = true;
    try {
      this.brands = await this.brandService.getAll().toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onShowProductForm() {
    this.showProductForm = true;
  }

  onEdit(id) {
    const value = this.products.find((c) => c._id == id);
    this.product = Object.assign({}, value);
    this.showProductForm = true;
  }

  onDetails(id) {
    const value = this.products.find((c) => c._id == id);
    this.product = Object.assign({}, value);
    this.showProductForm = false;
  }

  async onCreate(event) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.productService.create(event).toPromise();
      this.message = 'Product created';
      this.products.push(resp);
      this.showProductForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(event) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const sid = this.product._id;
    try {
      const resp = await this.productService.update(sid, event).toPromise();
      this.message = 'Product updated';
      this.showProductForm = false;
      this.product = null;
      this.getAllProducts();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onToggleActive(id, active) {
    if (confirm('Are you sure to ' + (active ? 'Dectivate' : 'Activate') + ' ?')) {
      try {
        const res = await this.productService.toggleActive(id).toPromise();

        const mesg = res.name + (res.active ? ' Activated' : ' Dectivated');
        const classname = 'text-light' + (res.approved ? ' bg-primary' : ' bg-danger')
        this.toastService.show(mesg, { classname, delay: 3000 });

        this.products.splice(this.products.findIndex(s => s._id == id), 1, res);
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  onClose() {
    this.product = null;
    this.showProductForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }

}
