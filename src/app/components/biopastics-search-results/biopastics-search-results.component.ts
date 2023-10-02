import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { async } from '@angular/core/testing';
import { v4 as uuidv4 } from 'uuid';

@Pipe({ name: 'title' })
export class TitlePipe implements PipeTransform {
  transform(item: any): string {
    return item.text + (item.price ? ` ($${item.price})` : '');
  }
}
@Component({
  selector: 'app-biopastics-search-results',
  templateUrl: './biopastics-search-results.component.html',
  styleUrls: ['./biopastics-search-results.component.scss'],
})
export class BiopasticsSearchResultsComponent implements OnInit {
  public advancedOpen: boolean = false;
  public isModalVisible: boolean = false;
  public selectedKeywordsList: any[] = [];
  public newsList: any[] = [];

  selectedEmployees: any[] = [];
  unselName: any[] = [];

  showCheckBoxesModes: string[] = ['normal', 'selectAll', 'none'];

  showCheckBoxesMode: string = this.showCheckBoxesModes[0];

  selectionModes: string[] = ['multiple', 'single'];

  selectionMode: string = this.selectionModes[0];

  selectNodesRecursive = true;

  selectByClick = false;

  isRecursiveDisabled = false;

  isSelectionModeDisabled = false;
  public accitems: any[] = ['Smart filters'];

  public employees: any[] = [
    {
      id: uuidv4(),
      fullName: 'Region',
      expanded: false,
      checkbox: false,
      items: [
        {
          id: uuidv4(),
          fullName: 'A',
          expanded: false,
        },
        {
          id: uuidv4(),
          fullName: 'E',
          expanded: false,
        },
        {
          id: uuidv4(),
          fullName: 'Av',
          expanded: false,
        },
      ],
    },
    {
      id: uuidv4(),
      fullName: 'Country',
      expanded: false,
      checkbox: false,
      items: [
        {
          id: uuidv4(),
          fullName: 'Region',
          expanded: false,
          items: [
            {
              id: uuidv4(),
              fullName: 'Kevin Carter',
            },
            {
              id: uuidv4(),
              fullName: 'Victor Norris',
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      fullName: 'Company',
      expanded: false,
      checkbox: false,
      items: [
        {
          id: uuidv4(),
          fullName: 'Region',
          expanded: false,
          items: [
            {
              id: uuidv4(),
              fullName: 'Kevin Carter',
            },
            {
              id: uuidv4(),
              fullName: 'Victor Norris',
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      fullName: 'Theme',
      expanded: false,
      checkbox: false,
      items: [
        {
          id: uuidv4(),
          fullName: 'Region',
          expanded: false,
          items: [
            {
              id: uuidv4(),
              fullName: 'Kevin Carter',
            },
            {
              id: uuidv4(),
              fullName: 'Victor Norris',
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      fullName: 'Topic',
      expanded: false,
      checkbox: false,
      items: [
        {
          id: uuidv4(),
          fullName: 'Region',
          expanded: false,
          items: [
            {
              id: uuidv4(),
              fullName: 'Kevin Carter',
            },
            {
              id: uuidv4(),
              fullName: 'Victor Norris',
            },
          ],
        },
      ],
    },
  ];

  public regionData: any[] = [
    'Africa',
    'Asia',
    'North America',
    'Oceania',
    'South America',
    'Europe',
  ];

  public verjankanData: any[] = [];

  public taxonomySelectedData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http
    //   .get('../../../assets/json/bioplastics_data.json')
    //   .subscribe((data: any) => {
    //     this.newsList = data;
    //   });
 
    this.genereytNewData();
  }



  async genereytNewData() {
    let region = {
      id: uuidv4(),
      fullName: 'Region',
      expanded: false,
      items: <any[]>[],
      parent: true
      // disabled: true
    };
    this.unselName.push(region.fullName)

    for await (const item of this.regionData) {
      region.items.push({
        id: uuidv4(),
        fullName: item,
      });
    }
   
    this.verjankanData.push(region);

   this.http
    .get('../../../assets/json/countries.json')
    .subscribe((data: any) => {
      let country = {
        id: uuidv4(),
        fullName: 'Country',
        expanded: false,
        items: <any[]>[],
      };
      for (const item of data) {
        country.items.push({
          id: uuidv4(),
          fullName: item.name,
        });
      }
      this.unselName.push(country.fullName)

      this.verjankanData.push(country);

    });


       this.http
      .get('../../../assets/json/bioplastics_data.json')
      .subscribe((data: any) => {
         const allCompany:string[] = [];
         for(const item of data){
          if(!allCompany.includes(item.Company)){
            allCompany.push(item.Company)
          }
         }
         let company = {
          id: uuidv4(),
          fullName: 'Company',
          expanded: false,
          items: <any[]>[],
        };
        for (const item of allCompany) {
          company.items.push({
            id: uuidv4(),
            fullName: item,
          });
        }
        this.unselName.push(company.fullName)

        this.verjankanData.push(company);
      });

      this.http
      .get('../../../assets/json/themes_data.json')
      .subscribe((data: any) => {
        
         let themes = {
          id: uuidv4(),
          fullName: 'Themes',
          expanded: false,
          items: <any[]>[],
        };
        for (const item of data) {
          themes.items.push({
            id: uuidv4(),
            fullName: item.Themes,
          });
        }
        this.unselName.push(themes.fullName)
        this.verjankanData.push(themes);
      });
      console.log('this.verjankanData',this.verjankanData)
     
  }

  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }
  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }

  handleMultipleKeywardsChange(arg: any[]) {
    console.log('arg', arg);
    // this.selectedKeywordsList = this.keywordsList.filter((item) =>
    //   arg.includes(item.label)
    // );
  }

  toggleFilterationItem(item) {
    if (!this.selectedEmployees.includes(item)) {
      this.selectedEmployees.push(item);
    }
  }

  setSelectedFilter(item) {
    console.log('item', item);
    if (item === 'Region') {
      this.taxonomySelectedData = this.regionData;
    }
  }

  treeViewSelectionChanged(e) {
    console.log('e',e)
    console.log('e',e.element)
    // let text = e.element.textContent
    // text = text.split(" ")
    // text = text.filter((item)=> item !== '')
    // console.log('text',text)
    // if(!this.unselName.includes(text[0])){
      this.syncSelection(e.component);
    // }
  }

  treeViewContentReady(e) {
    // console.log('eeeeee', e);

    this.syncSelection(e.component);
  }

  syncSelection(treeView) {
    const selectedEmployees = treeView
      .getSelectedNodes()
      .map((node) => node.itemData);
    console.log('selectedEmployees',selectedEmployees)
    this.selectedEmployees = selectedEmployees;
  }

  showCheckBoxesModeValueChanged(e) {
    this.showCheckBoxesMode = e.value;
    this.isSelectionModeDisabled = e.value === 'selectAll';
    if (e.value === 'selectAll') {
      this.selectionMode = 'multiple';
      this.isRecursiveDisabled = false;
    }
  }

  selectionModeValueChanged(e) {
    this.selectionMode = e.value;
    this.isRecursiveDisabled = e.value === 'single';
    if (e.value === 'single') {
      this.selectNodesRecursive = false;
      // this.treeView.instance.unselectAll();
    }
  }
}
