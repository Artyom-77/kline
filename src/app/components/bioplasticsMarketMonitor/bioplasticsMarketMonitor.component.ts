import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'bioplasticsMarketMonitor',
  templateUrl: './bioplasticsMarketMonitor.component.html',
  styleUrls: ['./bioplasticsMarketMonitor.component.scss'],
})
export class BioplasticsMarketMonitorComponent implements OnInit {
  public data: any[] = [];
  public newData: any[] = [];
  public themesData: any[] = [];
  public countriesData: any[] = [];
  public bioplasticsData: any[] = [];
  public filtredData: any;
  public filtredCompanyData: any[] = [];
  public filtredThemeData: any[] = [];
  public top10Companies: any[] = [];
  public top10Themes: any[] = [];
  public seriesNewArrayOfObjects: any[] = [];
  public selectedDropdownIndex: number = 0;
  public dropdownOpen: boolean = false;
  commonSeriesSettings = {
    argumentField: 'Company',
    valueField: 'Count',
    sizeField: `size`,
  };
  commonSeriesSettingsForTheme = {
    argumentField: 'Theme',
    valueField: 'Count',
    sizeField: `size`,
  };
  public countriesGroupByAZ: any[] = ['A-C', 'D-I', 'J-M', 'N-R', 'S-T', 'U-Z'];
  public activeGruopAZ: string = 'A-C';
  public filtredCountriesList: any[] = [];
  public regionData: any[] = [
    'Africa',
    'Asia',
    'North America',
    'Oceania',
    'South America',
    'Europe',
  ];

  public selectedFilters: any[] = [];
  public openDotsDrop: boolean = false;

  constructor(private http: HttpClient) {}

  @ViewChild('content', { static: true }) contentRef?: ElementRef;
  @ViewChild('navdrop') navdrop: ElementRef;
  ngOnInit() {
    // bioplastics_data
    this.http
      .get('../../../assets/json/bioplastics_data.json')
      .subscribe((data: any) => {
        this.bioplasticsData = data;
        // 10 random news
        this.data = data.filter((item, index) => index < 10);
        this.newData = this.data;
        // top 10 countries
        let companyCount = {};

        for (const entry of data) {
          const company = entry.Company.trim();
          if (company in companyCount) {
            companyCount[company]++;
          } else {
            companyCount[company] = 1;
          }
        }

        for (const company in companyCount) {
          this.filtredCompanyData.push({
            Company: company,
            Count: companyCount[company],
            size: companyCount[company] + 20,
          });
        }
        this.filtredCompanyData.sort((a, b) => b.Count - a.Count);

        this.top10Companies = this.filtredCompanyData.slice(0, 10);
        this.shuffle(this.top10Companies);

        console.log('top10Companies', this.top10Companies);
        //

        this.filtredData = this.countEqualStrings(this.bioplasticsData);

        for (const theme in this.filtredData) {
          this.filtredThemeData.push({
            Theme: theme,
            Count: this.filtredData[theme],
            size: this.filtredData[theme] + 20,
          });
        }
        this.filtredThemeData.sort((a, b) => b.Count - a.Count);

        this.top10Themes = this.filtredThemeData.slice(0, 10);
        this.shuffle(this.top10Themes);

        console.log('top10Themes', this.top10Themes);
      });
    // themes_data
    this.http
      .get('../../../assets/json/themes_data.json')
      .subscribe((data: any) => {
        this.themesData = data;
      });
    // countries_data
    this.http
      .get('../../../assets/json/countries.json')
      .subscribe((data: any) => {
        this.countriesData = data;
        this.filtredCountriesList = data.filter(
          (item) => item.group === this.activeGruopAZ
        );
      });
  }

  //  set selected filters

  setSelectedFilters(arg) {
    this.selectedFilters.push(arg);
    this.newData = this.data.filter((item) => item.Theme.includes(arg));
    console.log('this.newData', this.newData);
  }

  deleteSelectedFilter(arg, idx) {
    this.selectedFilters.splice(idx, 1);
    this.newData = this.data;
    console.log('this.selectedFilters', this.selectedFilters);
  }

  // random array elements places
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // count theme
  countEqualStrings(arr) {
    const themeCount = {};

    for (const entry of arr) {
      const themes = entry.Theme;
      if (Array.isArray(themes)) {
        for (const theme of themes) {
          if (theme in themeCount) {
            themeCount[theme.trim()]++;
          } else {
            themeCount[theme.trim()] = 1;
          }
        }
      }
    }

    return themeCount;
  }

  // custom chart tooltip
  customizeTooltip(arg: any) {
    return arg.value;
  }

  // slider go left
  scrollLeftPublished() {
    this.contentRef?.nativeElement.scrollBy({
      left: 586,
      behavior: 'smooth',
    });
  }

  dropClick() {
    this.navdrop.nativeElement.classList.toggle('visibility');
  }

  // changeCountryGroup

  changeGroup(item) {
    this.activeGruopAZ = item;
    this.filtredCountriesList = this.countriesData.filter(
      (item) => item.group === this.activeGruopAZ
    );
  }

  // openDropdown

  OpenDropdown(arg) {
    this.dropdownOpen = true;
    this.selectedDropdownIndex = arg;
  }
  // outclick
  onOutclick() {
    console.log('this.dropdownOpen', this.dropdownOpen);
    if (this.dropdownOpen === true) {
      this.dropdownOpen = false;
      this.selectedDropdownIndex = 0;
    }
  }

  // slider go right
  scrollRightPublished() {
    this.contentRef?.nativeElement.scrollBy({
      left: -586,
      behavior: 'smooth',
    });
    console.log('selectedDropdownIndex', this.selectedDropdownIndex);
  }

  onSeriesClick(e: any) {
    const series = e.target.argument;
    // const x = series.getArgumentRangeInitialValue();
    // console.log('series', series);
    console.log('series', series);
    this.newData = this.bioplasticsData.filter(
      (item) => item.Company === series
    );
    // if (series.isVisible()) {
    //   series.hide();
    // } else {
    //   series.show();
    // }
  }
}
