import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart-by-product-second',
  templateUrl: './pie-chart-by-product-second.component.html',
  styleUrls: ['./pie-chart-by-product-second.component.scss'],
})
export class PieChartByProductSecondComponent {
  @Input() chartData?: any;
  public viscosityGradeChartData: any[] = [];
  public mergedObj: any[] = [];
  public isBSTypeDropdownOpen: boolean = false;
  public isViscosityGradeDropdownOpen: boolean = false;
  public selectedBSType?: string = 'PIB';
  public selectedViscosityGrade?: string = '0W-16';
  public BSTypeList: any[] = [];
  public ViscosityGradeList: any[] = [];

  public isYearDropdownOpen: boolean = false;
  public selectedYear?: number = 2021;
  public yearList: any[] = [];

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (
        !this.BSTypeList.includes(data.BSType) &&
        data.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
      ) {
        // if (data.Sector === 'PCMO' || data.Sector === 'HDMO') {
        this.BSTypeList.push(data.BSType);
        // }
      }
    });
    // this.chartData.map((data: any) => {
    //   if (!this.ViscosityGradeList.includes(data.ViscosityGrade)) {
    //     if (data.Sector === 'PCMO' || data.Sector === 'HDMO') {
    //       this.ViscosityGradeList.push(data.ViscosityGrade);
    //     }
    //   }
    // });
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
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.Sector === current.Sector
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

  toggleBSTypeDropdown() {
    this.isBSTypeDropdownOpen = !this.isBSTypeDropdownOpen;
  }
  // toggleViscosityGradeDropdown() {
  //   this.isViscosityGradeDropdownOpen = !this.isViscosityGradeDropdownOpen;
  // }

  toggleBSTypeOption(option: string): void {
    this.selectedBSType = option;
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.BSType == this.selectedBSType &&
        // (item.Sector === 'PCMO' || item.Sector === 'HDMO') &&
        // item.ViscosityGrade == this.selectedViscosityGrade &&
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.Sector === current.Sector
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
    // console.log('this.viscosityGradeChartData', this.viscosityGradeChartData);
  }

  // toggleViscosityGradeOption(option: string): void {
  //   this.selectedViscosityGrade = option;
  //   this.viscosityGradeChartData = this.chartData.filter(
  //     (item: any) =>
  //       item.Sector == this.selectedBSType &&
  //       item.ViscosityGrade == this.selectedViscosityGrade &&
  //       item.Year === this.selectedYear &&
  //       item.mainColumn ===
  //         'Share of basestock in total synthetic basestock demand (%)'
  //   );
  //   console.log('this.viscosityGradeChartData', this.viscosityGradeChartData);
  // }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: number): void {
    this.selectedYear = option;
    this.viscosityGradeChartData = this.chartData.filter(
      (item: any) =>
        item.BSType == this.selectedBSType &&
        // (item.Sector === 'PCMO' || item.Sector === 'HDMO') &&
        // item.ViscosityGrade == this.selectedViscosityGrade &&
        item.Year === this.selectedYear &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.Sector === current.Sector
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
    // console.log('arg', arg);
    return `${arg.percentText}`;
  }
}
