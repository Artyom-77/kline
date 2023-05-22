import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-supplier-pie-chart-oil-export',
  templateUrl: './supplier-pie-chart-oil-export.component.html',
  styleUrls: ['./supplier-pie-chart-oil-export.component.scss'],
})
export class SupplierPieChartOilExportComponent implements OnInit {
  @Input() chartData?: any;
  @Input() hideDropdown?: boolean = false;

  public yearData: any[] = [
    {
      id: 1,
      label: 2022,
    },
  ];
  public totalSum: number = 0;
  public customPalette: string[] = [];

  constructor(private mainService: LandingServiceService) {}

  ngOnInit(): void {
    this.customPalette = this.mainService.customPalette;
    this.totalSum = 0;
    this.chartData.map((item) => {
      this.totalSum += item.value;
    });
  }
  handleChange(arg: string) {}
  customizeLabel(arg: any) {
    return `${arg.argumentText}: ${arg.percentText}`;
  }
}
