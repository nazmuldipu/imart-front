import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  imageObject = [
    {
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    },
    {
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    },
    {
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    },
    {
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    },
    {
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    },
    {
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onImageClick(event) {
    console.log(event);
  }
}
