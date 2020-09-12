import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPcMonitorsComponent } from './products-pc-monitors.component';

describe('ProductsPcMonitorsComponent', () => {
  let component: ProductsPcMonitorsComponent;
  let fixture: ComponentFixture<ProductsPcMonitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPcMonitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPcMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
