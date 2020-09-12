import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWirelessSmartphonesComponent } from './products-wireless-smartphones.component';

describe('ProductsSmartphonesPageComponent', () => {
  let component: ProductsWirelessSmartphonesComponent;
  let fixture: ComponentFixture<ProductsWirelessSmartphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsWirelessSmartphonesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWirelessSmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
