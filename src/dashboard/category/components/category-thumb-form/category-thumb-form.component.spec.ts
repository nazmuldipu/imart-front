import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryThumbFormComponent } from './category-thumb-form.component';

describe('CategoryThumbFormComponent', () => {
  let component: CategoryThumbFormComponent;
  let fixture: ComponentFixture<CategoryThumbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryThumbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryThumbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
