import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-ester-by-segment-and-product',
  templateUrl: './pie-chart-ester-by-segment-and-product.component.html',
  styleUrls: ['./pie-chart-ester-by-segment-and-product.component.scss'],
})
export class PieChartEsterBySegmentAndProductComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public isProductDropdownOpen: boolean = false;
  public selectedSegment?: string = 'Consumer Automotive';
  public selectedProduct?: string = 'PCMO';
  public segmentList: any[] = [];
  public productList: any[] = [];
  public totalSum: number = 0;

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.segmentList.includes(data.segment)) {
        this.segmentList.push(data.segment);
      }
      if (
        !this.productList.includes(data.product) &&
        this.selectedSegment === data.segment
      ) {
        this.productList.push(data.product);
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
  toggleProductDropdown() {
    this.isProductDropdownOpen = !this.isProductDropdownOpen;
  }

  toggleProductOption(option: string): void {
    this.selectedProduct = option;
    this.productChartData = this.chartData.filter(
      (item: any) =>
        item.segment == this.selectedSegment &&
        item.product == this.selectedProduct
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
  toggleYearOption(option: string): void {
    this.selectedSegment = option;
    this.chartData.map((data: any) => {
      if (
        !this.productList.includes(data.product) &&
        this.selectedSegment === data.segment
      ) {
        this.productList.push(data.product);
      }
    });
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
    return `${arg.argumentText}: ${arg.percentText}`;
  }
}
