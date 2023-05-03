import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartSplitByViscosityGradeSecondComponent } from './pie-chart-split-by-viscosity-grade-second.component';

describe('PieChartSplitByViscosityGradeSecondComponent', () => {
  let component: PieChartSplitByViscosityGradeSecondComponent;
  let fixture: ComponentFixture<PieChartSplitByViscosityGradeSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartSplitByViscosityGradeSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartSplitByViscosityGradeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
