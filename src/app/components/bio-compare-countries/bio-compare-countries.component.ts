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
  public timePeriods: any[] = []
  public route: any;
  public glossaryData: any[] = [
    {
      Term: 'Bio-Lubricant',
      Defination: `Kline defines a bio-lubricant as a lubricant that meets at least two of the following criteria:​

      Biodegradability: lubricants that biodegrade to their natural state from 60% onwards in 28 days – “readily biodegradable.”​
      
      Readily biodegradability can be measured through OECD 301 A-F, OECD 306, OECD 310, ASTM D5864 (Pw-1) , ASTM D-7373, and ISO tests (9439, 9408, 10707, 10708, 7827).​
      
      Inherently or rapidly biodegradable lubricants, related categories (Pw2-4), and CEC tests are out of the scope of this study.​
      
      
      Bio-sourced: lubricants with bio-based carbon in excess >25% (in line with CEN 16227), as measured by ASTM D-6866.​
      
      ​
      Toxicity: lubricants that are non-toxic to the environment and measured by OECD 201-203 for acute toxicity, OECD 210-211 for chronic toxicity or equivalent ASTM D-6064.​
      
      
      Sustainability: Lubricants that directly or indirectly contribute to carbon reduction efforts. Their contribution is based on a life cycle assessment (LCA), and additionally meet biodegradability, and/or renewability criteria.​
      `,
      CountrySpecificComments: `The Brazilian governmental agency, National Agency for Petroleum, Natural Gas and Biofuels, (ANP) through its Resolution 804/2019 defines biodegradable lubricants as those with final biodegradation of 60% within 28 days, according to ASTM D5864, OECD 301 and ISO 9439.​

      Finished lubricants or greases for any application (automotive or industrial) labeled as biodegradable must be registered at ANP and present all biodegradability tests and results.​
      
      Brazil follows the OECD 301 B, C, D or F test (>60% in 28 days).​`
    }
  ]
  constructor(private service: BioCompareService, private router: Router) {
    this.list = service.contriesList;
    this.criterias = service.criterias;
    this.timePeriods = service.timePeriods
    this.route = router
  }

  ngOnInit(): void {
    
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
            this.curent_data_times = arr
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
            this.curent_data = periodArr
          }
        });
      }
    }
  }
}
