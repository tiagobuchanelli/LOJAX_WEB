import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsElectronicsTvVideoComponent } from './products-electronics-tv-video.component';

describe('ProductsElectronicsTvVideoComponent', () => {
  let component: ProductsElectronicsTvVideoComponent;
  let fixture: ComponentFixture<ProductsElectronicsTvVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsElectronicsTvVideoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsElectronicsTvVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
