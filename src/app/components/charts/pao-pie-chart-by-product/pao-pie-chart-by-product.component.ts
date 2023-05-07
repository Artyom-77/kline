import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pao-pie-chart-by-product',
  templateUrl: './pao-pie-chart-by-product.component.html',
  styleUrls: ['./pao-pie-chart-by-product.component.scss'],
})
export class PaoPieChartByProductComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public selectedYear?: number = 2022;
  public yearList: any[] = [];

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.yearList.includes(data.Year)) {
        this.yearList.push(data.Year);
      }
    });
    this.productChartData = this.chartData.filter(
      (item: any) => item.Year === this.selectedYear
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.Sector === current.Sector
      );

      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: number): void {
    this.selectedYear = option;
    this.productChartData = this.chartData.filter(
      (item: any) => item.Year == this.selectedYear
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.Sector === current.Sector
      );

      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  }
  customizeLabel(arg: any) {
    return `${arg.percentText}`;
  }
}
