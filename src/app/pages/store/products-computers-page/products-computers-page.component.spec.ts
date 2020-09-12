import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComputersPageComponent } from './products-computers-page.component';

describe('ProductsComputersPageComponent', () => {
  let component: ProductsComputersPageComponent;
  let fixture: ComponentFixture<ProductsComputersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComputersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComputersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
