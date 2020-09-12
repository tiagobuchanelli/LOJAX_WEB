import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHouseholdApplianceComponent } from './products-household-appliance.component';

describe('ProductsHouseholdApplianceComponent', () => {
  let component: ProductsHouseholdApplianceComponent;
  let fixture: ComponentFixture<ProductsHouseholdApplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsHouseholdApplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHouseholdApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
