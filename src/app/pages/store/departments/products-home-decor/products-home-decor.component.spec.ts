import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomeDecorComponent } from './products-home-decor.component';

describe('ProductsHomeDecorComponent', () => {
  let component: ProductsHomeDecorComponent;
  let fixture: ComponentFixture<ProductsHomeDecorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsHomeDecorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHomeDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
