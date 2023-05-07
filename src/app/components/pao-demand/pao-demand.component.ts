import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';

@Component({
  selector: 'app-pao-demand',
  templateUrl: './pao-demand.component.html',
  styleUrls: ['./pao-demand.component.scss'],
})
export class PaoDemandComponent implements OnInit {
  public sales: any[] = [];
  public dataSource: any;
  public data: any;
  public allowSearch: boolean | null | undefined = true;
  public selectedMainTab: number = 1;
  public showRelevantValues: boolean | null | undefined = true;
  showRowFields = true;
  @Input() selectedTab: any = 1;
  showColumnFields = true;
  showFilterFields = true;

  constructor(
    private service: SyntheticBasestocksService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get('../../../assets/json/paoTabularData.json')
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
              caption: 'Sector',
              dataField: 'Sector',
              area: 'row',
            },
            {
              caption: 'Products',
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
            },
            {
              dataField: 'Year',
              dataType: 'Year',
              area: 'column',
              // expanded: true,
              // runningTotal: 'column',
              // allowCrossGroupCalculation: true,
            },
            {
              dataField: 'BSType',
              dataType: 'BSType',
              area: 'column',
              expanded: true,
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
}
