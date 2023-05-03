import { Component, OnInit } from '@angular/core';
import { RrboService } from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-regulation-rrbo',
  templateUrl: './regulation-rrbo.component.html',
  styleUrls: ['./regulation-rrbo.component.scss'],
})
export class RegulationRrboComponent implements OnInit {
  public regions: any[] = [
    { id: 1, label: 'North America' },
    { id: 2, label: 'Middle East and Africa' },
    { id: 3, label: 'Europe' },
    { id: 4, label: 'APAC' },
    { id: 5, label: 'South America' },
  ];
  public dataList: any[] = [];

  public europeCountries: any[] = [];
  public northAmericaCountries: any[] = [];
  public southAmericaCountries: any[] = [];
  public africaCountries: any[] = [];
  public asiaCountries: any[] = [];

  constructor(private service: RrboService) {
    this.dataList = service.reguliarSummary;
    this.europeCountries = service.europeCountries;
    this.northAmericaCountries = service.northAmericaCountries;
    this.southAmericaCountries = service.southAmericaCountries;
    this.africaCountries = service.africaCountries;
    this.asiaCountries = service.asiaCountries;
  }

  ngOnInit(): void {
    this.dataList.map((item: any, idx: number) => {
      let obj: any = {};
      // Object.keys(item).map((country, index: number) => {
      //   if (
      //     this.selectedCountry.includes(country) ||
      //     country === 'Criteria'
      //   ) {
      //     obj[country] = Object.values(item)[index];
      //   }
      // });
      // arr.push(obj);
      // if (this.criterias.length - 1 === idx) {
      //   this.curent_data_times = arr
      // }
    });
  }

  handleChange(arg: any): void {
    if(arg === 'North America') {
      this.dataList.map(item => {
        Object.keys(item).map(key => {
          console.log('key', key)
        })
      })
    }
  }
}
