import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubCategory } from 'src/shared/models/sub-category.model';

@Component({
  selector: 'side-nav-collapse',
  templateUrl: './side-nav-collapse.component.html',
  styleUrls: ['./side-nav-collapse.component.scss'],
})
export class SideNavCollapseComponent implements OnInit {
  @Input() data;
  @Input() title: any;
  @Input() sub_category;

  @Output() resp = new EventEmitter<any>();

  titleCollapse = true;

  constructor() { }

  ngOnInit(): void { }

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
    this.sub_category = '';
    this.resp.emit({ reset: true });
  }

  onSubCategoryClick(slug) {
    const obj = this.data.sub_category.find(sc => sc.slug === slug);
    this.resp.emit({ sub_category: obj.slug });
  }

  onSubSubCategoryClik(slug) {
    this.resp.emit({ sub_category: this.sub_category.slug, sub_sub_category: slug });
  }
}
