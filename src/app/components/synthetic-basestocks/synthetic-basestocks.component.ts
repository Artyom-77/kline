import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';
import { HttpClient } from '@angular/common/http';
import { PaoData } from 'src/app/types/types';

@Component({
  selector: 'app-synthetic-basestocks',
  templateUrl: './synthetic-basestocks.component.html',
  styleUrls: ['./synthetic-basestocks.component.scss'],
})
export class SyntheticBasestocksComponent implements OnInit, OnChanges {
  @Input() selectedTab: any = 1;
  public dataSource: any = {
    fields: [],
    store: <PaoData>[],
  };
  public data: any;
  public allowSearch: boolean | null | undefined = true;
  public selectedMainTab: number = 1;
  public showRelevantValues: boolean | null | undefined = true;
  public openModal: boolean = false;
  public modalDummyData: any[] = [];
  public chartData: any;
  showRowFields = true;
  showColumnFields = true;
  showFilterFields = true;
  myParam: string;
  constructor(
    private service: SyntheticBasestocksService,
    private http: HttpClient,
  ) {
    this.modalDummyData = service.modalData;
  }

  ngOnInit() {
    this.http
      .get('../../../assets/json/synteticTabularTabledata.json')
      .subscribe((data) => {
        this.dataSource = {};
        this.dataSource = {
          fields: [
            {
              caption: 'Segment',
              width: 50,
              dataField: 'Segment',
              area: 'row',
              allowSorting: false,
            },
            {
              caption: 'Lubricant Product',
              dataField: 'Sector',
              area: 'row',
            },
            {
              caption: 'Viscosity Grade/Product',
              dataField: 'ViscosityGrade',
              area: 'row',
              allowSorting: false,
            },
            {
              dataField: 'Region',
              area: 'filter',
              allowSorting: false,
            },
            {
              dataField: 'Year',
              area: 'filter',
            },
            {
              dataField: 'Unit',
              area: 'filter',
              allowSorting: false,
              filterType: {
                showAll: false,
                type: 'radio',
              },
            },
            {
              dataField: 'mainColumn',
              dataType: 'mainColumn',
              area: 'column',
              expanded: true,
              showTotals: false,
            },
            {
              dataField: 'BSType',
              dataType: 'BSType',
              area: 'column',
              expanded: true,
              runningTotal: 'column',
              allowCrossGroupCalculation: true,
              showTotals: false,
            },
            {
              caption: 'Sales',
              dataField: 'SumofValues',
              dataType: 'number',
              summaryType: 'sum',
              format: {
                type: 'fixedPoint',
                precision: 1,
              },
              area: 'data',
            },
          ],
          store: data,
        };
      });
  }

  openRecipeModal() {
    this.openModal = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }

  customizeCountryField(field: any) {
    console.log('field', field);
    return {
      editorOptions: {
        items: [
          { value: 'include', text: 'Include' },
          { value: 'exclude', text: 'Exclude' },
        ],
        displayExpr: 'text',
        valueExpr: 'value',
        onValueChanged: (event: any) => {
          this.onFieldRadioChange(event, field);
        },
      },
    };
  }

  onFieldRadioChange(event: any, field: any) {
    console.log('field', field);
    if (event.value === 'include') {
      field.filterType('include');
    } else {
      field.filterType('exclude');
    }
  }

  setSelectedMainTab(selectedTab: number): void {
    this.service.setSelectedMainTab(selectedTab);
  }

  getSelectedMainTab(): any {
    return this.service.getSelectedMainTab();
  }

  onCellClick(e: any) {
    // && e.cell.columnType !== 'T'
    // if (
    //   e.area == 'data' &&
    //   e.cell.rowType !== 'GT' &&
    //   e.cell.columnType !== 'GT'
    // ) {
    //   this.openModal = true;
    //   document.querySelector('.kline-app')?.classList.add('fixed');
    // }
  }
  onCloseModal() {
    this.openModal = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }
  onFocusedCellChanging(e: any) {
    e.isHighlighted = true;
  }

  ngOnChanges(): void {}
}
