import { Component } from '@angular/core';
import { SyntheticBasestocksService } from 'src/app/services/synthetic-basestocks/synthetic-basestocks.service';

@Component({
  selector: 'app-synthetic-basestocks',
  templateUrl: './synthetic-basestocks.component.html',
  styleUrls: ['./synthetic-basestocks.component.scss']
})
export class SyntheticBasestocksComponent {
 public sales: any[] = [];

 public dataSource: any;

  constructor(service: SyntheticBasestocksService) {
    this.dataSource = {
      fields: [{
        caption: 'segment',
        width: 120,
        dataField: 'segment',
        area: 'row',
      },  {
        dataField: 'type',
        dataType: 'type',
        area: 'column',
      },
      {
        dataField: 'typeItem',
        dataType: 'typeItem',
        area: 'column',
      }, {
        caption: 'Sales',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
      }],
      store: service.getSales(),
    };
  }

}
