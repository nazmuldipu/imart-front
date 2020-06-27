import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStyle1Component } from './product-style1.component';

describe('ProductStyle1Component', () => {
  let component: ProductStyle1Component;
  let fixture: ComponentFixture<ProductStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
