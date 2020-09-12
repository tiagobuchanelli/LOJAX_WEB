import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPcGamerComponent } from './products-pc-gamer.component';

describe('ProductsPcGamerComponent', () => {
  let component: ProductsPcGamerComponent;
  let fixture: ComponentFixture<ProductsPcGamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPcGamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPcGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
