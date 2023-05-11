import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-ester-by-product',
  templateUrl: './pie-chart-ester-by-product.component.html',
  styleUrls: ['./pie-chart-ester-by-product.component.scss'],
})
export class PieChartEsterByProductComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public selectedSinteticEster?: string = 'Polyol';
  public sinteticEsterList: any[] = [];
  public totalSum: number = 0;

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.sinteticEsterList.includes(data.sinteticEster)) {
        this.sinteticEsterList.push(data.sinteticEster);
      }
    });
    this.productChartData = this.chartData.filter(
      (item: any) => item.sinteticEster === this.selectedSinteticEster
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.product === current.product
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
    this.selectedSinteticEster = option;
    this.productChartData = this.chartData.filter(
      (item: any) => item.sinteticEster == this.selectedSinteticEster
    );
    this.mergedObj = this.productChartData.reduce((accumulator, current) => {
      const existingObject = accumulator.find(
        (item: any) => item.product === current.product
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
