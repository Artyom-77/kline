import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-pie-chart-sales-structure',
  templateUrl: './supplier-pie-chart-sales-structure.component.html',
  styleUrls: ['./supplier-pie-chart-sales-structure.component.scss'],
})
export class SupplierPieChartSalesStructureComponent {
  @Input() chartData?: any;
  @Input() hideDropdown?: boolean = false;

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
