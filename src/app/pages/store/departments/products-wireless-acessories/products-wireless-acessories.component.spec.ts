import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWirelessAcessoriesComponent } from './products-wireless-acessories.component';

describe('ProductsWirelessAcessoriesComponent', () => {
  let component: ProductsWirelessAcessoriesComponent;
  let fixture: ComponentFixture<ProductsWirelessAcessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsWirelessAcessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWirelessAcessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
