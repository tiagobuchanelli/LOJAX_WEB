import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductsDefaultComponent } from './card-products-default.component';

describe('CardProductsDefaultComponent', () => {
  let component: CardProductsDefaultComponent;
  let fixture: ComponentFixture<CardProductsDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductsDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
