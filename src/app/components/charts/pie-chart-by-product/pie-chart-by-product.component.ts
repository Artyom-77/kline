import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-by-product',
  templateUrl: './pie-chart-by-product.component.html',
  styleUrls: ['./pie-chart-by-product.component.scss'],
})
export class PieChartByProductComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public selectedYear?: number = 2022;
  public yearList: any[] = [];
  public tooltipColor: any;
  public totalSum: number = 0;

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.yearList.includes(data.Year)) {
        this.yearList.push(data.Year);
      }
    });
    this.productChartData = this.chartData.filter(
      (item: any) =>
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.BSType === current.BSType
      );

      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    this.totalSum = 0

    this.mergedObj.map(item => {
      this.totalSum +=  item.SumofValues
    })
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: number): void {
    this.selectedYear = option;
    this.productChartData = this.chartData.filter(
      (item: any) =>
        item.Year == this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.BSType === current.BSType
      );

      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    this.totalSum = 0
    this.mergedObj.map(item => {
      this.totalSum +=  item.SumofValues
    })
  }

  customizeLabel(arg: any) {
    console.log('arg', arg);
    console.log('arg.point.getColor()', arg.point.getColor());
    this.tooltipColor = arg.point.getColor();
    return `${arg.argumentText}: ${arg.percentText}`;
  }
}
