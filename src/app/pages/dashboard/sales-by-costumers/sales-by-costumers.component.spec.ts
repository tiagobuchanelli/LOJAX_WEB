import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCostumersComponent } from './sales-by-costumers.component';

describe('SalesByCostumersComponent', () => {
  let component: SalesByCostumersComponent;
  let fixture: ComponentFixture<SalesByCostumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByCostumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
