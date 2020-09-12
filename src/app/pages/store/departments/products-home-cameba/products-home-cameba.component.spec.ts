import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomeCamebaComponent } from './products-home-cameba.component';

describe('ProductsHomeCamebaComponent', () => {
  let component: ProductsHomeCamebaComponent;
  let fixture: ComponentFixture<ProductsHomeCamebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsHomeCamebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHomeCamebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
