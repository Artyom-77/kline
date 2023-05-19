import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pao-chart-view',
  templateUrl: './pao-chart-view.component.html',
  styleUrls: ['./pao-chart-view.component.scss'],
})
export class PaoChartViewComponent implements OnInit {
  @Input() chartData?: any;
  public PieByProduct: any[] = [];
  public firstSelect?: string = 'CONSUMER AUTOMOTIVE';
  public selectedList: any[] = [];
  public isCountryOpen: boolean = false;
  public selectedTab: number = 1;
  public regionList: any[] = [
    {
      id: 1,
      label: 'North America',
    },
    {
      id: 2,
      label: 'Middle East and Africa',
    },
    {
      id: 3,
      label: 'Europe',
    },
    {
      id: 4,
      label: 'APAC',
    },
    {
      id: 5,
      label: 'South America',
    },
  ];

  public yearList: any[] = [
    {
      id: 1,
      label: 2020,
    },
    {
      id: 2,
      label: 2021,
    },
    {
      id: 3,
      label: 2022,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.PieByProduct.includes(data.Segment)) {
        this.PieByProduct.push(data.Segment);
      }
    });
    this.selectedList = this.chartData.filter(
      (item: any) => item.Segment == this.firstSelect
    );
  }

  toggleCountryDropdown() {
    this.isCountryOpen = !this.isCountryOpen;
  }

  handleRegionChange(arg: string) {}

  handleYearChange(arg: string) {}

  toggleCountryOption(option: string): void {
    this.firstSelect = option;
    this.selectedList = this.chartData.filter(
      (item: any) =>
        item.Segment == this.firstSelect &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }
}
