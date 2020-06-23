import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <navbar-top></navbar-top>
    <navbar></navbar>
    <router-outlet></router-outlet>
    <fotter></fotter>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
