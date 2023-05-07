import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pao-chart-by-segment',
  templateUrl: './pao-chart-by-segment.component.html',
  styleUrls: ['./pao-chart-by-segment.component.scss'],
})
export class PaoChartBySegmentComponent implements OnInit {
  @Input() chartData?: any;
  public segmentChartData: any[] = [];
  public mergedObj: any[] = [];
  public isSegmentDropdownOpen: boolean = false;
  public selectedSegment?: string = 'CONSUMER AUTOMOTIVE';
  public segmentList: any[] = [];

  public isYearDropdownOpen: boolean = false;
  public selectedYear?: number = 2021;
  public yearList: any[] = [];

  ngOnInit(): void {
    this.mergedObj = this.chartData.reduce((accumulator: any, current: any) => {
      const existingObject = accumulator.find(
        (item: any) =>
          item.Segment === current.Segment && item.Year === current.Year
      );
      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  }

  toggleSegmentDropdown() {
    this.isSegmentDropdownOpen = !this.isSegmentDropdownOpen;
  }

  toggleSegmentOption(option: string): void {
    this.selectedSegment = option;
    this.segmentChartData = this.chartData.filter(
      (item: any) =>
        item.Segment == this.selectedSegment && item.Year === this.selectedYear
    );
    this.mergedObj = this.segmentChartData.reduce((accumulator, current) => {
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
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: number): void {
    this.selectedYear = option;
    this.segmentChartData = this.chartData.filter(
      (item: any) => item.Year == Number(this.selectedYear)
    );
    this.mergedObj = this.segmentChartData.reduce((accumulator, current) => {
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
  }
}
