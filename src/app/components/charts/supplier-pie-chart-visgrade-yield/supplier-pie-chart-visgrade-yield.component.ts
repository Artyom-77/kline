import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-pie-chart-visgrade-yield',
  templateUrl: './supplier-pie-chart-visgrade-yield.component.html',
  styleUrls: ['./supplier-pie-chart-visgrade-yield.component.scss'],
})
export class SupplierPieChartVisgradeYieldComponent implements OnInit {
  @Input() chartData?: any;
  public yearData: any[] = [
    {
      id: 1,
      label: 2022,
    },
  ];
  ngOnInit(): void {}
  handleChange(arg: string) {}
  customizeLabel(arg: any) {
    return `${arg.percentText}`;
  }
}
