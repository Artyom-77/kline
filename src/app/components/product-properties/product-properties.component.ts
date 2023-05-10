import { Component, OnInit } from '@angular/core';
import { ProductPropertiesService } from 'src/app/services/product-properties/product-properties.service';

@Component({
  selector: 'app-product-properties',
  templateUrl: './product-properties.component.html',
  styleUrls: ['./product-properties.component.scss'],
})
export class ProductPropertiesComponent implements OnInit {
  public dropdownProductItems: any[] = [];

  public dropdownCompanyItems: any[] = [];

  public productPropertiesData: any[] = [];

  public productPropertiesFitred: any[] = [];

  public columns: any[] = []

  constructor(private service : ProductPropertiesService) {
    this.productPropertiesData = service.productPropertiesData
    this.dropdownCompanyItems = service.dropdownCompanyItems
    this.dropdownProductItems = service.dropdownProductItems
  }

  ngOnInit(): void {
    this.productPropertiesFitred = this.productPropertiesData;
    this.columns = [
      {
        dataField: "productName"
      },
      {
        dataField: "companyName"
      },
      {
        dataField: "fileName"
      },
      {
        dataField: "uploadDate"
      },
      {
        caption: 'Actions',
        cellTemplate: this.actionsTemplate
      }
    ];
  }

  actionsTemplate(cellElement: any, cellInfo: any) {
    cellElement.innerHTML = `
    <div class="grid-data-btn">
      <button class="secondary">View</button>
    </div>

    `;
  }
  handleProductChange(arg: string) {
    this.productPropertiesFitred = arg === 'All' ? this.productPropertiesData : this.productPropertiesData.filter(item => item.productName === arg)
  }
  handleCompanyChange(arg: string) {
    this.productPropertiesFitred = arg === 'All' ? this.productPropertiesData : this.productPropertiesData.filter(item => item.companyName === arg)
  }
}
