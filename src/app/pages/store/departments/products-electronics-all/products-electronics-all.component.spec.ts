import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsElectronicsAllComponent } from './products-electronics-all.component';

describe('ProductsElectronicsTvsAllComponent', () => {
  let component: ProductsElectronicsAllComponent;
  let fixture: ComponentFixture<ProductsElectronicsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsElectronicsAllComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsElectronicsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
