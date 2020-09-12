import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInactiveComponent } from './products-inactive.component';

describe('ProductsInactiveComponent', () => {
  let component: ProductsInactiveComponent;
  let fixture: ComponentFixture<ProductsInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
