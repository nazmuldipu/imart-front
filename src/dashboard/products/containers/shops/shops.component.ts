import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/shared/models/shop.model';
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

  async getAllShop() {
    this.loading = true;
    try {
      this.shops = await this.shopService.getAll().toPromise();
      this.shops.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }


  onShowShopForm() { this.showShopForm = true; }

  onShopFormCancel() { this.onClose(); }

  onEdit(id) {
    const value = this.shops.find((c) => c._id == id);
    this.shop = Object.assign({}, value);
    this.showShopForm = true;
  }

  onDetails(id){
    const value = this.shops.find((c) => c._id == id);
    this.shop = Object.assign({}, value);
    this.showShopForm = false;
  }
  
  async onCreate(shop: Shop) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.shopService.create(shop).toPromise();
      this.message = 'Shop created';
      this.shops.push(resp);
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
        this.shops.splice(
          this.shops.findIndex((c) => c._id == id),
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

        const mesg = res.name +  (res.approved ? ' Activated' : ' Dectivated');
        const classname = 'text-light' + (res.approved ? ' bg-primary' : ' bg-danger')
        this.toastService.show(mesg, { classname, delay: 3000 });

        this.shops.splice(this.shops.findIndex(s => s._id == id), 1, res);
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
