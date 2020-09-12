import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsElectronicsAudioPortComponent } from './products-electronics-audio-port.component';

describe('ProductsElectronicsAudioPortComponent', () => {
  let component: ProductsElectronicsAudioPortComponent;
  let fixture: ComponentFixture<ProductsElectronicsAudioPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsElectronicsAudioPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsElectronicsAudioPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
