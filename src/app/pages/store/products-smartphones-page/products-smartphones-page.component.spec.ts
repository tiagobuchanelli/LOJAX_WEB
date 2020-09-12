import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSmartphonesPageComponent } from './products-smartphones-page.component';

describe('ProductsSmartphonesPageComponent', () => {
  let component: ProductsSmartphonesPageComponent;
  let fixture: ComponentFixture<ProductsSmartphonesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSmartphonesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSmartphonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
