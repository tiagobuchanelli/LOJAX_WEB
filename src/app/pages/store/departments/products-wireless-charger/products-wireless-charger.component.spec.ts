import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWirelessChargerComponent } from './products-wireless-charger.component';

describe('ProductsWirelessChargerComponent', () => {
  let component: ProductsWirelessChargerComponent;
  let fixture: ComponentFixture<ProductsWirelessChargerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWirelessChargerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWirelessChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
