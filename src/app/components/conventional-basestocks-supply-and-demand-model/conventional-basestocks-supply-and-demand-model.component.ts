import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';

@Component({
  selector: 'app-conventional-basestocks-supply-and-demand-model',
  templateUrl: './conventional-basestocks-supply-and-demand-model.component.html',
  styleUrls: ['./conventional-basestocks-supply-and-demand-model.component.scss']
})
export class ConventionalBasestocksSupplyAndDemandModelComponent implements OnInit {
  public openModal: boolean = false;
  public chartData: any;
  public modalDummyData: any[] = [];
  public dataSource: any = {
    fields: [],
    store: [],
  };
  constructor(
    private service: SyntheticBasestocksService,
    private http: HttpClient,
  ) {
    this.modalDummyData = service.modalData;
  }

  public regionsList: any[] = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'Argentina',
    },
    {
      id: 3,
      label: 'Chile',
    },
    {
      id: 4,
      label: 'Columbia',
    },
    {
      id: 5,
      label: 'Panama',
    },
    {
      id: 6,
      label: 'Uruguay',
    },
    {
      id: 7,
      label: 'Brazil',
    },
  ];

  public unitList: any[] = [
    {
      id: 1,
      label: 'KTPA',
    },
    {
      id: 2,
      label: 'B/D',
    },
  ];
  public yearList: any[] = [
    {
      id: 1,
      label: 2021,
    },
    {
      id: 2,
      label: 2022,
    },
    {
      id: 3,
      label: 2023,
    },
  ];

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

  onCloseModal() {
    this.openModal = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }
  onFocusedCellChanging(e: any) {
    e.isHighlighted = true;
  }

  groupList(arg: string) {

  }
}
