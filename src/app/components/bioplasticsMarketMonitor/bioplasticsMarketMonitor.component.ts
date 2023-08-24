import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bioplasticsMarketMonitor',
  templateUrl: './bioplasticsMarketMonitor.component.html',
  styleUrls: ['./bioplasticsMarketMonitor.component.scss'],
})
export class BioplasticsMarketMonitorComponent implements OnInit {
  public data: any[] = [];
  public themesData: any[] = [];
  public bioplasticsData: any[] = [];
  public filtredData: any;
  public filtredCompanyData: any[] = [];
  public filtredThemeData: any[] = [];
  public top10Companies: any[] = [];
  public top10Themes: any[] = [];
  public newsFrom10Company: any[] = [];
  public xxx: any[] = [];
  public companyThemeCount1: any[] = [];
  public seriesNewArrayOfObjects: any[] = [];
  public curentCompanyIndex: any = 0;

  public newData: any[] = [];
  public mainChartData: any[] = [];
  constructor(private http: HttpClient) {
    // this.argumentCustomizeText = this.argumentCustomizeText.bind(this);
  }

  ngOnInit() {
    this.http
      .get('../../../assets/json/bioplastics_data.json')
      .subscribe((data: any) => {
        this.bioplasticsData = data;
        // 10 random news
        this.data = data.filter((item, index) => index < 10);

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

        // this.seriesNewArrayOfObjects = this.top10Companies.map(
        //   (item, index) => ({
        //     name: item.Company,
        //     argumentField: 'total' + item.Company,
        //     valueField: 'older' + item.Company,
        //     sizeField: 'perc' + item.Company,
        //     tagField: 'tag' + item.Company,
        //   })
        // );

        // console.log('newArrayOfObjects', this.seriesNewArrayOfObjects);
      });

    this.http
      .get('../../../assets/json/themes_data.json')
      .subscribe((data: any) => {
        this.themesData = data;
      });
  }

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

  customizeTooltip(arg: any) {
    return arg.value;
  }

  // onSeriesClick(e: any) {
  //   const series = e.target;
  //   if (series.isVisible()) {
  //     series.hide();
  //   } else {
  //     series.show();
  //   }
  // }

  // foo() {
  //   // get news from top 10 companies
  //   for (const obj1 of this.bioplasticsData) {
  //     for (const obj2 of this.top10Companies) {
  //       if (obj1.Company === obj2.Company) {
  //         const combinedObject = { ...obj1, ...obj2 };
  //         this.newsFrom10Company.push(combinedObject);
  //         // break; // Break the inner loop once a match is found
  //       }
  //     }
  //   }

  //   console.log('this.newsFrom10Company', this.newsFrom10Company);

  //   // console.log('this.newsFrom10Company', this.newsFrom10Company);

  //   //  filter theme from all
  //   // this.filtredData = this.countEqualStrings(this.bioplasticsData);

  //   // for (const company in this.filtredData) {
  //   //   // console.log('companycompany', companyCount)
  //   //   this.filtredThemeData.push({
  //   //     Theme: company,
  //   //     themeCount: this.filtredData[company],
  //   //   });
  //   // }

  //   // console.log('this.filtredThemeData', this.filtredThemeData);

  //   //  filter theme from top 10

  //   this.filtredData = this.countEqualStrings(this.newsFrom10Company);

  //   for (const company in this.filtredData) {
  //     // console.log('companycompany', companyCount)
  //     this.filtredThemeData.push({
  //       themeName: company,
  //       themeCount: this.filtredData[company],
  //     });
  //   }

  //   // console.log('this.filtredThemeData', this.filtredThemeData);

  //   for (const entry of this.newsFrom10Company) {
  //     const company = entry.Company;
  //     const themes = entry.Theme;
  //     if (Array.isArray(themes)) {
  //       for (const theme of themes) {
  //         const existingEntry = this.companyThemeCount1.find(
  //           (item) => item.Company === company && item.Theme === theme
  //         );

  //         if (existingEntry) {
  //           existingEntry.Count++;
  //         } else {
  //           this.companyThemeCount1.push({
  //             Company: company,
  //             Theme: theme,
  //             Count: 1,
  //           });
  //         }
  //       }
  //     }
  //   }

  //   console.log('this.seriesNewArrayOfObjects', this.seriesNewArrayOfObjects);
  //   console.log('companyThemeCount1', this.companyThemeCount1);

  //   this.seriesNewArrayOfObjects.forEach((elm, index) => {
  //     this.companyThemeCount1.forEach((item) => {
  //       if (elm.name === item.Company) {
  //         this.newData.push({
  //           company: item.Company,
  //           count: item.Count,
  //           themeName: item.Theme,
  //         });
  //       }
  //     });
  //   });
  //   console.log('newData', this.newData);

  //   this.seriesNewArrayOfObjects.forEach((elm, index) => {
  //     let newobj: any = {
  //       name: elm.name,
  //       item: [],
  //     };
  //     this.newData.forEach((item: any) => {
  //       if (elm.name === item.company) {
  //         newobj.item.push(item);
  //       }
  //     });
  //     this.mainChartData.push(newobj);
  //   });

  //   console.log('xxxxxxxxxxx', this.mainChartData);

  //   // this.seriesNewArrayOfObjects.forEach((elm, index) => {
  //   //   let count = 0;
  //   //   let x = undefined
  //   //   this.companyThemeCount1.forEach((item) => {
  //   //     if (elm.name === item.Company) {
  //   //       x = item.Company
  //   //       count++
  //   //     }
  //   //   });
  //   //   this.newData[index]['total' + x] = count
  //   // });

  //   // console.log('newData',this.newData)

  //   const companyThemeCount = {};

  //   for (const entry of this.newsFrom10Company) {
  //     const company = entry.Company;
  //     const themes = entry.Theme;

  //     if (!(company in companyThemeCount)) {
  //       companyThemeCount[company] = {};
  //     }
  //     if (Array.isArray(themes)) {
  //       for (const theme of themes) {
  //         if (theme in companyThemeCount[company]) {
  //           companyThemeCount[company][theme]++;
  //         } else {
  //           companyThemeCount[company][theme] = 1;
  //         }
  //       }
  //     }
  //   }

  //   console.log('companyThemeCount', companyThemeCount);

  //   // for (const obj1 of this.filtredThemeData) {
  //   //   for (const obj2 of this.newsFrom10Company) {
  //   //     if(obj2?.Theme) {
  //   //       obj2?.Theme.map((item, i) => {
  //   //         // console.log('item',item)
  //   //         if (item === obj1.themeName) {
  //   //           const combinedObject = { ...obj1, ...obj2 };
  //   //           x.push(combinedObject);
  //   //           // break; // Break the inner loop once a match is found
  //   //         }
  //   //       })
  //   //     }
  //   //   }
  //   // }

  //   // this.filtredCompanyData = this.topCompaniesEqual(this.bioplasticsData);
  //   // console.log('this.filtredCompanyData', this.filtredCompanyData);
  // }

  // topCompaniesEqual() {
  //   // const stringCount = {};

  //   // for (const string of arr) {
  //   //   if (string.Company in stringCount) {
  //   //     stringCount[string.Company.trim()]++;
  //   //   } else {
  //   //     stringCount[string.Company.trim()] = 1;
  //   //   }
  //   // }

  //   let companyCount = {};
  //   let companyArray: any[] = [];

  //   for (const entry of this.bioplasticsData) {
  //     const company = entry.Company;
  //     if (company in companyCount) {
  //       companyCount[company]++;
  //     } else {
  //       companyCount[company] = 1;
  //     }
  //   }

  //   for (const company in companyCount) {
  //     companyArray.push({ Company: company, Count: companyCount[company] });
  //   }
  //   console.log('companyArray', companyArray);

  //   return companyArray;
  // }

  // argumentCustomizeText(item) {
  //   console.log('this.curentCompanyIndex', this.curentCompanyIndex);
  //   console.log('item', item);
  //   // console.log('this.seriesNewArrayOfObjects',this.seriesNewArrayOfObjects)
  //   const name = this.seriesNewArrayOfObjects[this.curentCompanyIndex].name;
  //   if (this.curentCompanyIndex + 1 === this.seriesNewArrayOfObjects.length) {
  //     this.curentCompanyIndex = 0;
  //   } else {
  //     this.curentCompanyIndex = this.curentCompanyIndex + 1;
  //   }
  //   return null;
  // }

  // valueCustomizeText(args: any) {
  //   console.log('args', args.max === 10);
  //   return args.value;
  // }
}
