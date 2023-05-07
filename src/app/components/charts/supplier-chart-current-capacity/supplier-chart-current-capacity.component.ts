import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-chart-current-capacity',
  templateUrl: './supplier-chart-current-capacity.component.html',
  styleUrls: ['./supplier-chart-current-capacity.component.scss'],
})
export class SupplierChartCurrentCapacityComponent implements OnInit {
  @Input() chartData?: any;
  @Input() text?: string;
  ngOnInit(): void {
    console.log('chartData', this.chartData);
  }
}
