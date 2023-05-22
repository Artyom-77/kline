import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';

@Component({
  selector: 'app-pao-demand',
  templateUrl: './pao-demand.component.html',
  styleUrls: ['./pao-demand.component.scss'],
})
export class PaoDemandComponent implements OnInit {
  public sales: any[] = [];
  public dataSource: any = {
    fields: [],
    store: [],
  };
  public data: any;
  public allowSearch: boolean | null | undefined = true;
  public selectedMainTab: number = 1;
  public showRelevantValues: boolean | null | undefined = true;
  public openModal: boolean = false;
  public gridItemData: any | undefined;
  showRowFields = true;
  @Input() selectedTab: any = 1;
  showColumnFields = true;
  showFilterFields = true;
  public modalDummyData: any[] = [];
  constructor(
    private service: SyntheticBasestocksService,
    private http: HttpClient
  ) {
    this.modalDummyData = service.modalData;
  }

  ngOnInit() {
    this.http
      .get('../../../assets/json/paoTabularData.json')
      .subscribe((data) => {
        this.dataSource={}
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
              dataField: 'Products',
              area: 'row',
            },
            {
              dataField: 'Region',
              area: 'filter',
            },
            {
              dataField: 'Unit',
              area: 'filter',
            },
            {
              dataField: 'mainColumn',
              dataType: 'mainColumn',
              area: 'column',
              expanded: true,
              showTotals: false,
            },
            {
              dataField: 'Year',
              dataType: 'Year',
              area: 'column',
              showTotals: false,
            },
            {
              dataField: 'Year',
              area: 'filter',
            },
            {
              dataField: 'BSType',
              dataType: 'BSType',
              area: 'column',
              expanded: true,
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

  setSelectedPaoMainTab(selectedTab: number): void {
    this.service.setSelectedPaoMainTab(selectedTab);
  }

  getSelectedPaoMainTab(): any {
    return this.service.getSelectedPaoMainTab();
  }

  openRecipeModal() {
    this.openModal = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }

  onCellClick(e: any) {}

  onCloseModal() {
    this.openModal = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }
  onFocusedCellChanging(e: any) {
    e.isHighlighted = true;
  }
}
