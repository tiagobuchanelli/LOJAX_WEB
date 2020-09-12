import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductsCustomComponent } from './card-products-custom.component';

describe('CardProductsCustomComponent', () => {
  let component: CardProductsCustomComponent;
  let fixture: ComponentFixture<CardProductsCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductsCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
