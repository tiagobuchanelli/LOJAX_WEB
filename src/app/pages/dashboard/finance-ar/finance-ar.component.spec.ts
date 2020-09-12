import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceArComponent } from './finance-ar.component';

describe('FinanceArComponent', () => {
  let component: FinanceArComponent;
  let fixture: ComponentFixture<FinanceArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
