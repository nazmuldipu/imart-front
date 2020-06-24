import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCollapseComponent } from './side-nav-collapse.component';

describe('SideNavCollapseComponent', () => {
  let component: SideNavCollapseComponent;
  let fixture: ComponentFixture<SideNavCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
