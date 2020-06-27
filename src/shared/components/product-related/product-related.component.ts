import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Products } from 'src/shared/json/dummy';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'product-related',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss'],
})
export class ProductRelatedComponent{
  products = Products;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      100: {
        items: 1,
      },
      300: {
        items: 2,
      },
      540: {
        items: 3,
      },
      640: {
        items: 4,
      },
    },
    nav: true,
  };

}
