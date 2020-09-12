import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPcAllPageComponent } from './products-pc-all-page.component';

describe('ProductsComputersPageComponent', () => {
  let component: ProductsPcAllPageComponent;
  let fixture: ComponentFixture<ProductsPcAllPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPcAllPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPcAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
