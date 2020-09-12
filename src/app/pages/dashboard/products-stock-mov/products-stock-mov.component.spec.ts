import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStockMovComponent } from './products-stock-mov.component';

describe('ProductsStockMovComponent', () => {
  let component: ProductsStockMovComponent;
  let fixture: ComponentFixture<ProductsStockMovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStockMovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStockMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
