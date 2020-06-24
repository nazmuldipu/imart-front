import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-nav-collapse',
  templateUrl: './side-nav-collapse.component.html',
  styleUrls: ['./side-nav-collapse.component.scss'],
})
export class SideNavCollapseComponent implements OnInit {
  @Input() data: any;
  @Output() resp = new EventEmitter<any>();

  titleCollapse = true;
  category = '';
  
  constructor() {}

  ngOnInit(): void {}

  widgetTitleCollapse() {
    this.titleCollapse = !this.titleCollapse;
    this.category = '';
  }

  categoryClicked(name) {
    //Set subcategory components
    if (this.category === name) {
      this.category = '';
    } else {
      this.category = name;
    }

    //if no sub category contain then emit
    const obj = this.data.categories.find((c) => c.name === name);
    if (!!obj && (!obj.subCagegories || obj.subCagegories.length == 0)) {
      this.resp.emit({ cagegory: name });
    }
  }

  onSubCategoryCliked(name) {
    this.resp.emit({ category: this.category, subCagegory: name });
  }
}
