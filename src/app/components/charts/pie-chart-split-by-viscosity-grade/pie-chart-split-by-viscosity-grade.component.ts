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
  public isViscosityGradeDropdownOpen: boolean = false;
  public selectedBSType?: string = 'PCMO';
  public selectedViscosityGrade?: string = '0W-20';
  public BSTypeList: any[] = [];
  public ViscosityGradeList: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public selectedYear?: number = 2022;
  public yearList: any[] = [];

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.BSTypeList.includes(data.Sector)) {
        if (data.Sector === 'PCMO' || data.Sector === 'HDMO') {
          this.BSTypeList.push(data.Sector);
        }
      }
    });
    this.chartData.map((data: any) => {
      if (!this.ViscosityGradeList.includes(data.ViscosityGrade)) {
        if (data.Sector === 'PCMO' || data.Sector === 'HDMO') {
          this.ViscosityGradeList.push(data.ViscosityGrade);
        }
      }
    });
    this.chartData.map((data: any) => {
      if (!this.yearList.includes(data.Year)) {
        this.yearList.push(data.Year);
      }
    });
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.Sector == this.selectedBSType &&
        item.ViscosityGrade == this.selectedViscosityGrade &&
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.BSType === current.BSType
        );

        if (existingObject) {
          Object.assign(existingObject, current);
        } else {
          accumulator.push(current);
        }
        return accumulator;
      },
      []
    );
    console.log('this.mergedObj',this.mergedObj)
  }

  toggleBSTypeDropdown() {
    this.isBSTypeDropdownOpen = !this.isBSTypeDropdownOpen;
  }
  toggleViscosityGradeDropdown() {
    this.isViscosityGradeDropdownOpen = !this.isViscosityGradeDropdownOpen;
  }

  toggleBSTypeOption(option: string): void {
    this.selectedBSType = option;
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
      item.Sector == this.selectedBSType &&
      item.ViscosityGrade == this.selectedViscosityGrade &&
      item.Year === this.selectedYear &&
      item.mainColumn ===
        'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.BSType === current.BSType
        );

        if (existingObject) {
          Object.assign(existingObject, current);
        } else {
          accumulator.push(current);
        }
        return accumulator;
      },
      []
    );
  }

  toggleViscosityGradeOption(option: string): void {
    this.selectedViscosityGrade = option;
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.Sector == this.selectedBSType &&
        item.ViscosityGrade == this.selectedViscosityGrade &&
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.BSType === current.BSType
        );

        if (existingObject) {
          Object.assign(existingObject, current);
        } else {
          accumulator.push(current);
        }
        return accumulator;
      },
      []
    );
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: number): void {
    this.selectedYear = option;
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.Sector == this.selectedBSType &&
        item.ViscosityGrade == this.selectedViscosityGrade &&
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.BSType === current.BSType
        );

        if (existingObject) {
          Object.assign(existingObject, current);
        } else {
          accumulator.push(current);
        }
        return accumulator;
      },
      []
    );
  }

  customizeLabel(arg: any) {
    return `${arg.percentText}`;
  }
}
