import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPcComponentsConnectionComponent } from './products-pc-components-connection.component';

describe('ProductsPcComponentsConnectionComponent', () => {
  let component: ProductsPcComponentsConnectionComponent;
  let fixture: ComponentFixture<ProductsPcComponentsConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPcComponentsConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPcComponentsConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
