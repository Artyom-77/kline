import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-chart-production',
  templateUrl: './supplier-chart-production.component.html',
  styleUrls: ['./supplier-chart-production.component.scss'],
})
export class SupplierChartProductionComponent implements OnInit {
  @Input() chartData?: any;

  ngOnInit(): void {
    console.log('chartData', this.chartData);
  }

  customizeTooltip(arg: any) {
    return {
      text: `${arg.valueText}&#176C`,
    };
  }

  customizeText(arg: any) {
    return `${arg.valueText}&#176C`;
  }
}
