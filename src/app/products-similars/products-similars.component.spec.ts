import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSimilarsComponent } from './products-similars.component';

describe('ProductsSimilarsComponent', () => {
  let component: ProductsSimilarsComponent;
  let fixture: ComponentFixture<ProductsSimilarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSimilarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSimilarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
