import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-pie-chart-oil-export',
  templateUrl: './supplier-pie-chart-oil-export.component.html',
  styleUrls: ['./supplier-pie-chart-oil-export.component.scss'],
})
export class SupplierPieChartOilExportComponent {
  @Input() chartData?: any;
  public yearData: any[] = [
    {
      id: 1,
      label: 2022,
    },
  ];
  // ngOnInit(): void {
  //   console.log('chartData', this.chartData);
  // }
  handleChange(arg: string) {}
  customizeLabel(arg: any) {
    return `${arg.percentText}`;
  }
}
