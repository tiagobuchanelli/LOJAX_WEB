import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumersAddComponent } from './costumers-add.component';

describe('CostumersAddComponent', () => {
  let component: CostumersAddComponent;
  let fixture: ComponentFixture<CostumersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
