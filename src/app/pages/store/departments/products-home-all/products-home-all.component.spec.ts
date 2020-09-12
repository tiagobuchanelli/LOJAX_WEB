import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomeAllComponent } from './products-home-all.component';

describe('ProductsHomeAllComponent', () => {
  let component: ProductsHomeAllComponent;
  let fixture: ComponentFixture<ProductsHomeAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsHomeAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHomeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
