import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubCategory } from 'src/shared/models/sub-category.model';

@Component({
  selector: 'side-nav-collapse',
  templateUrl: './side-nav-collapse.component.html',
  styleUrls: ['./side-nav-collapse.component.scss'],
})
export class SideNavCollapseComponent implements OnInit {
  @Input() data: SubCategory[];
  @Input() title: any;
  @Output() resp = new EventEmitter<any>();

  titleCollapse = true;
  sub_category = '';

  constructor() { }

  ngOnInit(): void { }

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
    this.sub_category = '';
  }

  categoryClicked(name) {
    //Set subcategory components
    if (this.sub_category === name) {
      this.sub_category = '';
    } else {
      this.sub_category = name;
    }

    //if no sub category contain then emit
    const obj = this.data.find((c) => c.name === name);
    if (!!obj) {
      this.resp.emit({ sub_category: obj.slug });
    }
  }

  onSubCategoryCliked(name) {
    this.resp.emit({ category: this.sub_category, subCagegory: name });
  }
}
