import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart-split-by-segment',
  templateUrl: './pie-chart-split-by-segment.component.html',
  styleUrls: ['./pie-chart-split-by-segment.component.scss'],
})
export class PieChartSplitBySegmentComponent {
  @Input() chartData?: any;
  public viscosityGradeChartData: any[] = [];

  public isBSTypeDropdownOpen: boolean = false;
  public isViscosityGradeDropdownOpen: boolean = false;
  public selectedBSType?: string = 'PIB';
  public selectedViscosityGrade?: string = '0W-16';
  public BSTypeList: any[] = [];
  public ViscosityGradeList: any[] = [];
  public mergedObj: any;

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
    this.mergedObj = this.viscosityGradeChartData.reduce(
      (accumulator, current) => {
        const existingObject = accumulator.find(
          (item: any) => item.Segment === current.Segment
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

  toggleBSTypeOption(option: string): void {
    this.selectedBSType = option;
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
          (item: any) => item.Segment === current.Segment
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
    // this.mergedObj = this.viscosityGradeChartData.reduce((acc, curr) => {
    //   if (acc[curr.Segment]) {
    //     acc[curr.Segment].SumofValues += curr.SumofValues;
    //   } else {
    //     acc[curr.Segment] = { ...curr };
    //   }
    //   return acc;
    // }, {});
    console.log('this.viscosityGradeChartData', this.viscosityGradeChartData);
    console.log('mergedObj', this.mergedObj);
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: number): void {
    this.selectedYear = option;
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
          (item: any) => item.Segment === current.Segment
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