import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWirelessTabletComponent } from './products-wireless-tablet.component';

describe('ProductsWirelessTabletComponent', () => {
  let component: ProductsWirelessTabletComponent;
  let fixture: ComponentFixture<ProductsWirelessTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWirelessTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWirelessTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
