import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-chart-growth-rates',
  templateUrl: './chart-growth-rates.component.html',
  styleUrls: ['./chart-growth-rates.component.scss']
})
export class ChartGrowthRatesComponent implements OnInit {
  @Input() chartData?: any;
  public segmentChartData: any[] = [];

  public isSegmentDropdownOpen: boolean = false;
  public selectedSegment?: string = 'CONSUMER AUTOMOTIVE';
  public segmentList: any[] = [];

  public isSectorDropdownOpen: boolean = false;
  public selectedSector?: string = "PCMO";
  public sectorList: any[] = [];

  public isYearDropdownOpen: boolean = false;
  public selectedYear?: string = '';
  public yearList: any[] = [];
  public combinedYearList: any[] = [];

  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if (!this.segmentList.includes(data.Segment)) {
        this.segmentList.push(data.Segment);
      }
    });
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
    this.selectedYear = `${Math.min(...this.yearList)}-${Math.max(...this.yearList)}`
    this.combinedYearList.push(this.selectedYear)
    this.segmentChartData = this.chartData.filter(
      (item: any) =>
        item.Segment == this.selectedSegment &&
        item.Sector === this.selectedSector &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }

  toggleSegmentDropdown() {
    this.isSegmentDropdownOpen = !this.isSegmentDropdownOpen;
  }

  toggleSegmentOption(option: string): void {
    this.selectedSegment = option;
    this.segmentChartData = this.selectedSegment === "All Segments" ? this.chartData : this.chartData.filter(
      (item: any) =>
        item.Segment == this.selectedSegment &&
        item.Sector === this.selectedSector &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }

  toggleSectorDropdown() {
    this.isSectorDropdownOpen = !this.isSectorDropdownOpen;
  }

  toggleSectorOption(option: string): void {
    this.selectedSector = option;
    this.segmentChartData = this.chartData.filter(
      (item: any) =>
        item.Segment == this.selectedSegment &&
        item.Sector === this.selectedSector &&
        item.mainColumn ===
          'Share of basestock in total synthetic basestock demand (%)'
    );
  }

  toggleYearDropdown() {
    this.isYearDropdownOpen = !this.isYearDropdownOpen;
  }
}
