import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-adv',
  templateUrl: './side-adv.component.html',
  styleUrls: ['./side-adv.component.scss'],
})
export class SideAdvComponent implements OnInit {
  advs = [
    { img: 'assets/dummy/shop/pro-adv1.jpg' },
    { img: 'assets/dummy/shop/pro-adv2.jpg' },
    { img: 'assets/dummy/shop/pro-adv3.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
