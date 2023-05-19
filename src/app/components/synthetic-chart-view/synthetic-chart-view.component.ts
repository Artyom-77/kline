import { Component, Input, OnInit } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';

@Component({
  selector: 'app-synthetic-chart-view',
  templateUrl: './synthetic-chart-view.component.html',
  styleUrls: ['./synthetic-chart-view.component.scss'],
})
export class SyntheticChartViewComponent implements OnInit {
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
  public analyzed: string = 'Synthetic Basestocks Demand';
  public analyzedList: any[] = [
    {
      id: 1,
      label: 'Synthetic Basestocks Demand',
    },
    {
      id: 2,
      label: 'Consumption by Synthetic Ester Type',
    },
    {
      id: 3,
      label: 'Consumption by PAG Type',
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
  public synteticEsterData: any[] = [];
  public pagEsterData: any[] = [];
  constructor(private syntheticBasestocksService: SyntheticBasestocksService) {
    this.synteticEsterData = syntheticBasestocksService.sinteticEsterTypeData;
    this.pagEsterData = syntheticBasestocksService.PAGEsterTypeData;
  }

  toggleCountryDropdown() {
    this.isCountryOpen = !this.isCountryOpen;
  }

  handleRegionChange(arg: string) {}

  handleAnalyzedChange(arg: string) {
    this.analyzed = arg;
  }
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

  procesdedCLick(): void {
    if (this.analyzed === 'Synthetic Basestocks Demand') {
      this.selectedTab = 1;
    } else if (this.analyzed === 'Consumption by Synthetic Ester Type') {
      this.selectedTab = 2;
    } else {
      this.selectedTab = 3;
    }
  }
}
