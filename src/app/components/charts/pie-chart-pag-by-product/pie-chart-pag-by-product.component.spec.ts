import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPagByProductComponent } from './pie-chart-pag-by-product.component';

describe('PieChartPagByProductComponent', () => {
  let component: PieChartPagByProductComponent;
  let fixture: ComponentFixture<PieChartPagByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartPagByProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartPagByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
