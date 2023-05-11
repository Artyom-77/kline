import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPagBySegmentAndProductComponent } from './pie-chart-pag-by-segment-and-product.component';

describe('PieChartPagBySegmentAndProductComponent', () => {
  let component: PieChartPagBySegmentAndProductComponent;
  let fixture: ComponentFixture<PieChartPagBySegmentAndProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartPagBySegmentAndProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartPagBySegmentAndProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
