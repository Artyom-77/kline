import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-share-of-syntetic-ester',
  templateUrl: './pie-chart-share-of-syntetic-ester.component.html',
  styleUrls: ['./pie-chart-share-of-syntetic-ester.component.scss'],
})
export class PieChartShareOfSynteticEsterComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public selectedSegment?: string = 'Consumer Automotive';
  public segmentList: any[] = [];
  public totalSum: number = 0;

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.segmentList.includes(data.segment)) {
        this.segmentList.push(data.segment);
      }
    });
    this.productChartData = this.chartData.filter(
      (item: any) => item.segment === this.selectedSegment
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.sinteticEster === current.sinteticEster
      );

      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    this.totalSum = 0;

    this.mergedObj.map((item) => {
      this.totalSum += item.value;
    });
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: string): void {
    this.selectedSegment = option;
    this.productChartData = this.chartData.filter(
      (item: any) => item.segment == this.selectedSegment
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.sinteticEster === current.sinteticEster
      );

      if (existingObject) {
        Object.assign(existingObject, current);
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    this.totalSum = 0;
    this.mergedObj.map((item) => {
      this.totalSum += item.value;
    });
  }

  customizeLabel(arg: any) {
    console.log('arg', arg);
    console.log('arg.point.getColor()', arg.point.getColor());
    return `${arg.argumentText}: ${arg.percentText}`;
  }
}
