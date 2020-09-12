import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarStoreComponent } from './nav-bar-store.component';

describe('NavBarStoreComponent', () => {
  let component: NavBarStoreComponent;
  let fixture: ComponentFixture<NavBarStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
