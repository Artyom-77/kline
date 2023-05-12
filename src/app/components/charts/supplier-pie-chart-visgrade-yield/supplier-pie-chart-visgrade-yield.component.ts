import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-pie-chart-visgrade-yield',
  templateUrl: './supplier-pie-chart-visgrade-yield.component.html',
  styleUrls: ['./supplier-pie-chart-visgrade-yield.component.scss'],
})
export class SupplierPieChartVisgradeYieldComponent implements OnInit {
  @Input() chartData?: any;
  @Input() hideDropdown?: boolean = false;
  public yearData: any[] = [
    {
      id: 1,
      label: 2022,
    },
  ];
  public totalSum: number = 0;
  ngOnInit(): void {
    this.totalSum = 0
    this.chartData.map(item => {
      this.totalSum +=  item.value
    })
  }
  handleChange(arg: string) {}
  customizeLabel(arg: any) {
    return `${arg.argumentText}: ${arg.percentText}`;
  }
}
