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
  showRowFields = true;
  @Input() selectedTab: any = 1;
  showColumnFields = true;
  showFilterFields = true;

  constructor(
    private service: SyntheticBasestocksService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get('../../../assets/json/synteticTabularTabledata.json').subscribe((data)=>{
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
            caption: 'ViscosityGrade',
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
    })
  }



  ngOnChanges(): void {
    console.log('selectedTab', this.selectedTab);
    // this.BioDetails = this.bioData.criterias.find((item: any) => item.tabName === this.selectedTabName);
  }
}
