import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePageStoreComponent } from './frame-page-store.component';

describe('FramePageStoreComponent', () => {
  let component: FramePageStoreComponent;
  let fixture: ComponentFixture<FramePageStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramePageStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
