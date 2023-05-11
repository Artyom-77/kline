import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartEsterByEsterComponent } from './pie-chart-ester-by-ester.component';

describe('PieChartEsterByEsterComponent', () => {
  let component: PieChartEsterByEsterComponent;
  let fixture: ComponentFixture<PieChartEsterByEsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartEsterByEsterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartEsterByEsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
