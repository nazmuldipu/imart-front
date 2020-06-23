import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id;

  constructor(private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
