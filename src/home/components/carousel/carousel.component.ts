import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { scaleIn, scaleOut, slideIn, slideOut } from './carousel.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        useAnimation(slideIn, { params: { time: '500ms' } }),
      ]),
      transition('* => void', [
        useAnimation(slideOut, { params: { time: '500ms' } }),
      ]),
    ]),
    trigger('scaleAnimation', [
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '500ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } }),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  public slides = [
    {
      src: 'assets/images/banners/banner1.jpg',
      title: 'Honey ',
      subtitle: 'Khalisha - 100% Fresh',
      text: '৳1000.00/KG',
    },
    {
      src: 'assets/images/banners/banner2.jpg',
      title: 'Mustard oil',
      subtitle: 'Cold pressed',
      text: '৳300.00/KG',
    },
    {
      src: 'assets/images/banners/banner3.jpg',
      title: 'Binni rice',
      subtitle: 'Live healty',
      text: 'upto 20% off',
    },
  ];
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    this.preloadImages(); // for the demo
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
