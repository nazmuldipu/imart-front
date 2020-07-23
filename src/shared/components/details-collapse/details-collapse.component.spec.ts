import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCollapseComponent } from './details-collapse.component';

describe('DetailsCollapseComponent', () => {
  let component: DetailsCollapseComponent;
  let fixture: ComponentFixture<DetailsCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
