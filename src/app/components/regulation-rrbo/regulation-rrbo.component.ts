import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RrboService } from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-regulation-rrbo',
  templateUrl: './regulation-rrbo.component.html',
  styleUrls: ['./regulation-rrbo.component.scss'],
})
export class RegulationRrboComponent implements OnInit, OnChanges {
  public regions: any[] = [
    { id: 1, label: 'North America' },
    { id: 2, label: 'Middle East and Africa' },
    { id: 3, label: 'Europe' },
    { id: 4, label: 'APAC' },
    { id: 5, label: 'South America' },
  ];
  public countries: any[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'USA' },
    { id: 3, label: 'Brazil' },
    { id: 4, label: 'India' },
    { id: 5, label: 'China' },
    { id: 6, label: 'Indonesia' },
    { id: 7, label: 'Japan' },
    { id: 8, label: 'Malaysia' },
    { id: 9, label: 'Mexico' },
    { id: 10, label: 'Russia' },
    { id: 11, label: 'SouthKorea' },
    { id: 12, label: 'Thailand' },
    { id: 13, label: 'Canada' },
    { id: 14, label: 'WesternEurope' },
  ];
  public countriesList: any[] = [];
  public dataList: any[] = [];
  public selectedRegion: any[] = [];
  public europeCountries: any[] = [];
  public northAmericaCountries: any[] = [];
  public southAmericaCountries: any[] = [];
  public africaCountries: any[] = [];
  public asiaCountries: any[] = [];
  public newData: any[] = [];
  public selectedTab: number = 1;
  public oilData: any[] = [];
  public selectedOilData: any[] = [];
  constructor(private service: RrboService) {
    this.oilData = service.usedOilData;
    this.dataList = service.reguliarSummary;
    this.europeCountries = service.europeCountries;
    this.northAmericaCountries = service.northAmericaCountries;
    this.southAmericaCountries = service.southAmericaCountries;
    this.africaCountries = service.africaCountries;
    this.asiaCountries = service.asiaCountries;
  }

  ngOnInit(): void {
    this.newData = this.dataList;
    this.countriesList = this.countries;
    this.selectedOilData = this.oilData.filter(
      (item) => item.country === 'Brazil'
    );
  }
  ngOnChanges(): void {}

  handleChange(arg: any): void {
    const arr: any = [];
    switch (arg) {
      case 'North America':
        this.selectedRegion = this.northAmericaCountries;
        break;
      case 'Middle East and Africa':
        this.selectedRegion = this.africaCountries;
        break;
      case 'Europe':
        this.selectedRegion = this.europeCountries;
        break;
      case 'APAC':
        this.selectedRegion = this.asiaCountries;
        break;
      case 'South America':
        this.selectedRegion = this.southAmericaCountries;
        break;
    }

    this.dataList.map((item, idx: number) => {
      let obj: any = {};
      Object.keys(item).map((key, index: number) => {
        if (
          (this.selectedRegion.includes(key) && this.selectedRegion.length) ||
          key === 'question'
        ) {
          obj[key] = Object.values(item)[index];
        }
      });
      arr.push(obj);
      if (this.dataList.length - 1 === idx) {
        this.newData = arr;
      }
    });

    this.countriesList = this.countries.filter((item) =>
      this.selectedRegion.includes(item.label)
    );
  }
  handleCountryChange(arg: any): void {
    this.selectedOilData = this.oilData.filter((item) => arg === item.country);
  }
}
