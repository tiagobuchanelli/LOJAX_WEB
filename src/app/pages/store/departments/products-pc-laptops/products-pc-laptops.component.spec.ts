import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPcLaptopsComponent } from './products-pc-laptops.component';

describe('ProductsPcLaptopsComponent', () => {
  let component: ProductsPcLaptopsComponent;
  let fixture: ComponentFixture<ProductsPcLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPcLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPcLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
