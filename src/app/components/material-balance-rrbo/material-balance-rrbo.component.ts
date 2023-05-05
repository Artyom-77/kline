import { Component, OnInit } from '@angular/core';
import { RrboService } from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-material-balance-rrbo',
  templateUrl: './material-balance-rrbo.component.html',
  styleUrls: ['./material-balance-rrbo.component.scss']
})
export class MaterialBalanceRrboComponent implements OnInit {
  public list : any[] = []
  public generationChartData: any[] = [];
  public collectionChartData: any[] = [];
  public disposalChartData: any[] = [];
  public refiningChartData: any[] = [];
  public selectedRegion: string = ''
  public selectedCountry: string = ''
  public regionOptions: any[] = [
    { id: 1, label: 'North America' },
    { id: 2, label: 'Middle East and Africa' },
    { id: 3, label: 'Europe' },
    { id: 4, label: 'APAC' },
    { id: 5, label: 'South America' },
  ];
  public countryOptions: any[] = [];
  public generationChartTotal: number = 0
  public collectionChartTotal: number = 0
  public disposalChartTotal: number = 0
  public refiningChartTotal: number = 0

  constructor(private service: RrboService) {
    this.list = service.materialBalanceData;
  }

  ngOnInit(): void {
    console.log('this.list',this.list)
  }

  handleChange(arg: string) {
    this.selectedRegion = arg
    this.countryOptions = []
    this.list.map(item => {
      if(item.region === arg) {
        this.countryOptions.push({id: item.id, label: item.country})
      }
    })
  }

  handleCountryChange(arg: string) {
    this.generationChartData = []
    this.collectionChartData = []
    this.disposalChartData = []
    this.refiningChartData = []
    this.selectedCountry = arg
    this.list.map(item => {
      if(item.region === this.selectedRegion && item.country === this.selectedCountry) {
        this.generationChartData.push(item.generation.lubricantLost)
        this.generationChartData.push(item.generation.usedOilGenerated)
        this.collectionChartData.push(item.collection.collected)
        this.collectionChartData.push(item.collection.notCollected)
        this.disposalChartData.push(item.disposal.refined)
        this.disposalChartData.push(item.disposal.fuel)
        this.disposalChartData.push(item.disposal.others)
        this.refiningChartData.push(item.refining.basestock)
        this.refiningChartData.push(item.refining.others)
        this.generationChartTotal += item.generation.lubricantLost.value + item.generation.usedOilGenerated.value
        this.collectionChartTotal += item.collection.collected.value + item.collection.notCollected.value
        this.disposalChartTotal += item.disposal.refined.value + item.disposal.fuel.value + item.disposal.others.value
        this.refiningChartTotal += item.refining.basestock.value + item.refining.others.value
      }
    })
  }

  customizeLabel(arg: any) {
    return `${arg.percentText}`;
  }
}
