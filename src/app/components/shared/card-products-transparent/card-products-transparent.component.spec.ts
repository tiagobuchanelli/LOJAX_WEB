import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductsTransparentComponent } from './card-products-transparent.component';

describe('CardProductsTransparentComponent', () => {
  let component: CardProductsTransparentComponent;
  let fixture: ComponentFixture<CardProductsTransparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductsTransparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductsTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
