import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardPageComponent } from './home-dashboard-page.component';

describe('HomeDashboardPageComponent', () => {
  let component: HomeDashboardPageComponent;
  let fixture: ComponentFixture<HomeDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
