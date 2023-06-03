import { Component, OnInit } from '@angular/core';
import { BlenderDatabaseService } from 'src/app/services/blender-database/blender-database.service';
import { MapSetting, Marker, RrboService } from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-blender-database',
  templateUrl: './blender-database.component.html',
  styleUrls: ['./blender-database.component.scss'],
})
export class BlenderDatabaseComponent implements OnInit {
  public regionsList: any[] = [];
  public groupList: any[] = [];
  public nameList: any[] = [];
  public blanderData: any[] = [];
  public filtredData : any[] = [];
  public columns: any[] = [];
  markers: Marker[];
  keys: any = {};
  mapTypes: MapSetting[];
  customMarkerUrl: string;
  mapMarkerUrl: string;
  originalMarkers: Marker[];
  public breadcrumpData: any[] = [{
    home: 'Basestock Market Watch',
    main: 'Finished Lubricant Blender Database',
    // tab: 'Tabular View'
  }]
  constructor(private service: BlenderDatabaseService,private rrboService: RrboService ) {
    this.groupList = service.groupList;
    this.regionsList = service.regionsList;
    this.nameList = service.nameList;
    this.blanderData = service.blanderData;
    this.mapTypes = rrboService.getMapTypes();
    // this.keys['bing'] =
    //   'AtT_6S6HNv0CHmLGyavC3zzxSqE76igYhmudioJCcspySokNdN75eimgJZr_qk1S';
    this.keys['google'] =
      'AIzaSyCdOxElq-laCN8DL0YXZMquRTjlvWnjog8';
    this.customMarkerUrl = this.mapMarkerUrl = rrboService.getMarkerUrl();
    this.originalMarkers = this.markers = rrboService.getMarkers();
  }

  ngOnInit(): void {
    this.filtredData = this.blanderData
    this.columns = [
      {
        dataField: "name"
      },
      {
        dataField: 'Ownership/ attiliation'
      },
      {
        dataField: "website"
      },
      {
        dataField: "Location: City"
      },
      {
        dataField: "Location: address"
      },
      {
        dataField: "Capacity (blending), KT"
      },
      {
        dataField: "Capacity: source"
      },
      {
        dataField: "Year Built"
      },
      {
        dataField: "Contact Details"
      },
      {
        dataField: "Headquarters"
      },
      {
        dataField: "Integration"
      },
      {
        dataField: "Location: Country"
      },
      {
        dataField: "Location: State"
      },
      {
        dataField: "Membership"
      },
      {
        caption: 'Remarks',
        cellTemplate: this.actionsTemplate
      }
    ];
  }

  actionsTemplate(cellElement: any, cellInfo: any) {
    cellElement.innerHTML = `
    <div class="grid-data-btn">
      <button class="secondary">Remarks</button>
    </div>

    `;
  }

  handleGroupChange(arg: string) {

  }
  handleRegionChange(arg: string) {
    this.filtredData = arg ==="All" ? this.blanderData : this.blanderData.filter(item => arg === item['Location: Country'])


  }
  handleNameChange(arg: string) {
    this.filtredData = arg ==="All" ? this.blanderData : this.blanderData.filter(item => arg === item.name)


  }
}
