import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-by-product',
  templateUrl: './pie-chart-by-product.component.html',
  styleUrls: ['./pie-chart-by-product.component.scss']
})
export class PieChartByProductComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];

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
      (item: any) =>
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
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
  }
}