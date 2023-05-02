import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-by-segment',
  templateUrl: './chart-by-segment.component.html',
  styleUrls: ['./chart-by-segment.component.scss']
})
export class ChartBySegmentComponent implements OnInit {
  @Input() chartData?: any;
  public PieByProduct: any[]= []
  public firstSelect?: string = 'CONSUMER AUTOMOTIVE';
  public selectedList: any[]= [];
  public isCountryOpen: boolean = false;
  ngOnInit(): void {
    this.chartData.map((data: any) => {
      if(!this.PieByProduct.includes(data.Segment)) {
        this.PieByProduct.push(data.Segment)
      }
    })
    this.selectedList = this.chartData.filter(
      (item: any) => item.Segment == this.firstSelect
    );
      // console.log('chartData', this.chartData)
      // this.PieByProduct = this.chartData.filter(item => )
  }

  toggleCountryDropdown() {
    this.isCountryOpen = !this.isCountryOpen;
  }
  // customizeText(arg: any) {
  //   // console.log('arg',arg)
  //   return `Day ${arg.valueText}`;
  // }
  toggleCountryOption(option: string): void {
    this.firstSelect = option;
    this.selectedList = this.chartData.filter(
      (item: any) => item.Segment == this.firstSelect &&  item.mainColumn === "Share of basestock in total synthetic basestock demand (%)"
    );
   
    // console.log('this.selectedList',this.selectedList)
  }
}
