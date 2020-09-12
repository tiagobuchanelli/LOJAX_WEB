import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomeFurnitureComponent } from './products-home-furniture.component';

describe('ProductsHomeFurnitureComponent', () => {
  let component: ProductsHomeFurnitureComponent;
  let fixture: ComponentFixture<ProductsHomeFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsHomeFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHomeFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
