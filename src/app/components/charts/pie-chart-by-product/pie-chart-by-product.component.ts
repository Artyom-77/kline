import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

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
  public selectedSector?: string = 'PCMO';
  public isSectorDropdownOpen: boolean = false;
  public sectorList: any[] = [];

  public customPalette: string[] = [];

  constructor(private mainService: LandingServiceService) {}

  ngOnInit(): void {
    this.customPalette = this.mainService.customPalette;
    this.chartData.map((data: any) => {
      if (!this.sectorList.includes(data.Sector)) {
        this.sectorList.push(data.Sector);
      }
    });
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
    this.totalSum = 0;

    this.mergedObj.map((item) => {
      this.totalSum += item.SumofValues;
    });
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleSectorDropdown() {
    this.isSectorDropdownOpen = !this.isSectorDropdownOpen;
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
    this.totalSum = 0;
    this.mergedObj.map((item) => {
      this.totalSum += item.SumofValues;
    });
  }

  toggleSectorOption(option: string): void {
    this.selectedSector = option;
    this.mergedObj = this.chartData.filter(
      (item: any) =>
        item.Sector === this.selectedSector &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }

  customizeLabel(arg: any) {
    this.tooltipColor = arg.point.getColor();
    return `${arg.argumentText}: ${arg.percentText}`;
  }
}
