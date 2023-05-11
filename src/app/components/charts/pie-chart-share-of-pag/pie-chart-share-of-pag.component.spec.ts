import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartShareOfPagComponent } from './pie-chart-share-of-pag.component';

describe('PieChartShareOfPagComponent', () => {
  let component: PieChartShareOfPagComponent;
  let fixture: ComponentFixture<PieChartShareOfPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartShareOfPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartShareOfPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
