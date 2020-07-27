import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/services/shop.service';
import { Shop } from 'src/shared/models/shop.model';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged, map, switchMap, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  shopList: Shop[] = [];

  loading = false;
  message = '';
  errorMessage = '';

  
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }
  
}
