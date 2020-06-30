import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss'],
})
export class DashNavbarComponent implements OnInit {
  @Output() expand = new EventEmitter<boolean>();

  mode = true;

  constructor() {}

  ngOnInit(): void {}

  onSlide() {
    this.mode = !this.mode;
    this.expand.emit(this.mode);
  }
}
