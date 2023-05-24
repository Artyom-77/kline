import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-pie-chart-pag-by-product',
  templateUrl: './pie-chart-pag-by-product.component.html',
  styleUrls: ['./pie-chart-pag-by-product.component.scss'],
})
export class PieChartPagByProductComponent implements OnInit {
  @Input() chartData?: any;
  public productChartData: any[] = [];
  public mergedObj: any[] = [];
  public isYearDropdownOpen: boolean = false;
  public selectedSinteticEster?: string = 'Random Polymers of EO/PO';
  public sinteticEsterList: any[] = [];
  public totalSum: number = 0;
  public customPalette: string[] = [];

  constructor(private mainService: LandingServiceService) {}

  ngOnInit(): void {
    this.customPalette = this.mainService.customPalette;
    this.chartData.map((data: any) => {
      if (!this.sinteticEsterList.includes(data.pagEster)) {
        this.sinteticEsterList.push(data.pagEster);
      }
    });
    this.productChartData = this.chartData.filter(
      (item: any) => item.pagEster === this.selectedSinteticEster
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

  chartTitle: string = "Chart Title";

  disableTitleTooltip() {
    const chartElement = document.getElementsByClassName("dxp-chart")[0];
    if (chartElement) {
      chartElement.setAttribute("title", "");
    }
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }

  toggleYearOption(option: string): void {
    this.selectedSinteticEster = option;
    this.productChartData = this.chartData.filter(
      (item: any) => item.pagEster == this.selectedSinteticEster
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
