import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-synthetic-basestocks',
  templateUrl: './synthetic-basestocks.component.html',
  styleUrls: ['./synthetic-basestocks.component.scss'],
})
export class SyntheticBasestocksComponent implements OnInit, OnChanges {
  public sales: any[] = [];
  public dataSource: any;
  public data: any;
  public allowSearch: boolean | null | undefined = true;
  public selectedMainTab: number = 1;
  public showRelevantValues: boolean | null | undefined = true;
  public openModal: boolean = false;
  public gridItemData: any | undefined;
  public modalDummyData: any[] = [];

  showRowFields = true;
  @Input() selectedTab: any = 1;
  showColumnFields = true;
  showFilterFields = true;

  constructor(
    private service: SyntheticBasestocksService,
    private http: HttpClient
  ) {
    this.modalDummyData = service.modalData;
  }

  ngOnInit() {
    this.http
      .get('../../../assets/json/synteticTabularTabledata.json')
      .subscribe((data) => {
        this.dataSource = {
          fields: [
            {
              caption: 'Segment',
              width: 50,
              dataField: 'Segment',
              area: 'row',
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
            },
            {
              dataField: 'Region',
              area: 'filter',
              // filterValues: ['Region'],
            },
            {
              dataField: 'Year',
              area: 'filter',
              // filterValues: ['Region'],
            },
            {
              dataField: 'Unit',
              area: 'filter',
              // filterValues: ['Region'],
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

  onCellClick(e: any) {
    // && e.cell.columnType !== 'T'
    // if (
    //   e.area == 'data' &&
    //   e.cell.rowType !== 'GT' &&
    //   e.cell.columnType !== 'GT'
    // ) {
    //   this.openModal = true;
    //   document.querySelector('.kline-app')?.classList.add('fixed');
    //   console.log('e', e);
    //   this.gridItemData = e;
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
