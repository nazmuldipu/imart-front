import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.scss'],
})
export class TopbannerComponent implements OnInit {
  @Input() categories: Category[];

  @Input() thumbUrl: string;
  
  constructor() {}

  ngOnInit(): void {}
}
