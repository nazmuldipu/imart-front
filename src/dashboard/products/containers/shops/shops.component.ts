import { Component, OnInit } from '@angular/core';
import { Shop, ShopPage } from 'src/shared/models/shop.model';
import { ShopService } from 'src/services/shop.service';
import { UtilService } from 'src/services/util.service';
import { ToastService } from 'src/services/toast.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent implements OnInit {
  shop: Shop;
  shopPage: ShopPage;
  shops: Shop[] = [];
  imageUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showShopForm = false;


  constructor(private shopService: ShopService, private utilService: UtilService,
    public toastService: ToastService) {
    this.imageUrl = this.shopService.shopLink + '/image/';
  }

  ngOnInit(): void {
    this.getAllShop();
  }

  async getAllShop(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.shopPage = await this.shopService.getAll(page, limit, sort, order).toPromise();
      this.shops = this.shopPage.docs;
      // this.shops.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onShowShopForm() { this.showShopForm = true; }

  onShopFormCancel() { this.onClose(); }

  onChangePage(page) {
    this.getAllShop(page.pageNumber, page.limit, page.sort, page.order);
  }

  onEdit(id) {
    const value = this.shopPage.docs.find((c) => c._id == id);
    this.shop = Object.assign({}, value);
    this.showShopForm = true;
  }

  onDetails(id) {
    const value = this.shopPage.docs.find((c) => c._id == id);
    this.shop = Object.assign({}, value);
    this.showShopForm = false;
  }

  async onSearch(event) {
    if (event.length > 2) {
      this.loading = true;
      this.shopPage = null;
      try {
        await this.shopService.search(event.toLowerCase()).subscribe(data => {
          this.shops = data ? data : [];
        });
        // console.log(value);
      } catch (error) {
        this.errorMessage = error;
      }
      this.loading = false
    } else if (event.length == 0) {
      this.getAllShop();
    }
  }

  async onCreate(shop: Shop) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.shopService.create(shop).toPromise();
      this.message = 'Shop created';
      this.shopPage.docs.push(resp);
      this.showShopForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(shop: Shop) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const sid = this.shop._id;
    try {
      const resp = await this.shopService.update(sid, shop).toPromise();
      this.message = 'Shop updated';
      this.showShopForm = false;
      this.shop = null;
      this.getAllShop();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      try {
        const res = await this.shopService.delete(id).toPromise();
        this.message = 'Shop deleted';
        this.shopPage.docs.splice(
          this.shopPage.docs.findIndex((c) => c._id == id),
          1
        );
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  async onToggleActive(id, status) {

    if (confirm('Are you sure to ' + (status ? 'Activate' : 'Deactivate') + ' ?')) {
      try {
        const res = await this.shopService.toggleApprove(id).toPromise();

        const mesg = res.name + (res.approved ? ' Activated' : ' Dectivated');
        const classname = 'text-light' + (res.approved ? ' bg-primary' : ' bg-danger')
        this.toastService.show(mesg, { classname, delay: 3000 });

        this.shopPage.docs.splice(this.shopPage.docs.findIndex(s => s._id == id), 1, res);
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  onClose() {
    this.shop = null;
    this.showShopForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
