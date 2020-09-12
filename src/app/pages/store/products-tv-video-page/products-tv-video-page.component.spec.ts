import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTvVideoPageComponent } from './products-tv-video-page.component';

describe('ProductsTvVideoPageComponent', () => {
  let component: ProductsTvVideoPageComponent;
  let fixture: ComponentFixture<ProductsTvVideoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTvVideoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTvVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
