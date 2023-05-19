import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BioCompareService } from 'src/app/services/bio-compare/bio-compare.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-bio-compare-countries',
  templateUrl: './bio-compare-countries.component.html',
  styleUrls: ['./bio-compare-countries.component.scss'],
})
export class BioCompareCountriesComponent implements OnInit {
  public isCountryOpen: boolean = false;
  public selectedCountry: any[] = [];
  public uniqueId: any = uuidv4();
  public isModalVisible: boolean = false;
  public curent_data: any[] = [];
  public curent_data_times: any[] = [];
  public list: any[] = [];
  public criterias: any[] = [];
  public timePeriods: any[] = [];
  public route: any;
  public glossaryData: any[] = [];

  constructor(private service: BioCompareService, private router: Router) {
    this.list = service.contriesList;
    this.criterias = service.criterias;
    this.timePeriods = service.timePeriods;
    this.route = router;
  }

  ngOnInit(): void {
    this.glossaryData = this.service.glossaryData;
  }

  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }
  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }

  toggleCountryDropdown() {
    this.isCountryOpen = !this.isCountryOpen;
  }

  onOutclickCountry() {
    if (this.isCountryOpen === true) {
      this.isCountryOpen = false;
    }
  }

  toggleCountryOption(option: string): void {
    const index = this.selectedCountry.indexOf(option);
    if (index > -1) {
      this.selectedCountry.splice(index, 1);
    } else {
      const arr: any = [];
      const periodArr: any = [];
      if (this.selectedCountry.length <= 4) {
        this.selectedCountry.push(option);
      }
      if (this.selectedCountry.length === 4) {
        this.criterias.map((item: any, idx: number) => {
          let obj: any = {};
          Object.keys(item).map((country, index: number) => {
            if (
              this.selectedCountry.includes(country) ||
              country === 'Criteria'
            ) {
              obj[country] = Object.values(item)[index];
            }
          });
          arr.push(obj);
          if (this.criterias.length - 1 === idx) {
            this.curent_data_times = arr;
          }
        });

        this.timePeriods.map((item: any, idx: number) => {
          let obj: any = {};
          Object.keys(item).map((period, index: number) => {
            if (
              this.selectedCountry.includes(period) ||
              period === 'TimePeriod'
            ) {
              obj[period] = Object.values(item)[index];
            }
          });
          periodArr.push(obj);
          if (this.timePeriods.length - 1 === idx) {
            this.curent_data = periodArr;
          }
        });
      }
    }
  }
}
