import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWirelessAllComponent } from './products-wireless-all.component';

describe('ProductsWirelessAllComponent', () => {
  let component: ProductsWirelessAllComponent;
  let fixture: ComponentFixture<ProductsWirelessAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWirelessAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWirelessAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
