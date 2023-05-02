import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-split-by-viscosity-grade',
  templateUrl: './pie-chart-split-by-viscosity-grade.component.html',
  styleUrls: ['./pie-chart-split-by-viscosity-grade.component.scss'],
})
export class PieChartSplitByViscosityGradeComponent implements OnInit {
  @Input() chartData?: any;
  public viscosityGradeChartData: any[] = [];

  public isBSTypeDropdownOpen: boolean = false;
  public selectedBSType?: string = 'PAO';
  public BSTypeList: any[] = [];

  public isYearDropdownOpen: boolean = false;
  public selectedYear?: number = 2022;
  public yearList: any[] = [];

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.BSTypeList.includes(data.BSType)) {
        this.BSTypeList.push(data.BSType);
      }
    });
    this.chartData.map((data: any) => {
      if (!this.yearList.includes(data.Year)) {
        this.yearList.push(data.Year);
      }
    });
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.BSType == this.selectedBSType &&
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }

  toggleBSTypeDropdown() {
    this.isBSTypeDropdownOpen = !this.isBSTypeDropdownOpen;
  }

  toggleBSTypeOption(option: string): void {
    this.selectedBSType = option;
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.BSType == this.selectedBSType &&
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
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.Year == this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }

  customizeLabel(arg: any) {
    return `${arg.percentText}`;
  }
}
