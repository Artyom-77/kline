import { Component, OnInit } from '@angular/core';
import {
  MapSetting,
  Marker,
  RrboService,
} from 'src/app/services/rrbo/rrbo.service';
// import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
// import * as  mapsData  from 'vectormap-data/world.js';
// @node_modulesdevextreme/dist/js/vectormap-data/world.js
@Component({
  selector: 'app-capacity-map-rrbo',
  templateUrl: './capacity-map-rrbo.component.html',
  styleUrls: ['./capacity-map-rrbo.component.scss'],
})
export class CapacityMapRrboComponent implements OnInit {
  mapTypes: MapSetting[];
  customMarkerUrl: string;
  public dropdownItems: any[] = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'Brazil',
    },
    {
      id: 3,
      label: 'Argentina',
    },
    {
      id: 4,
      label: 'Mexico',
    },
    {
      id: 5,
      label: 'Chile',
    },
    {
      id: 6,
      label: 'Puerto Rico ',
    },
  ];
  public selectedCountry: any[] = [];
  mapMarkerUrl: string;

  originalMarkers: Marker[];
  public capacityData: any[] = [];
  markers: Marker[];
  keys: any = {};
  // public worldMap: any = mapsData.world;

  constructor(service: RrboService) {
    this.mapTypes = service.getMapTypes();
    this.capacityData = service.capacityData;
    // this.keys['bing'] =
    //   'AtT_6S6HNv0CHmLGyavC3zzxSqE76igYhmudioJCcspySokNdN75eimgJZr_qk1S';
    this.keys['google'] = 'AIzaSyCdOxElq-laCN8DL0YXZMquRTjlvWnjog8';
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
    this.originalMarkers = this.markers = service.getMarkers();

        // this.customizeMarkerLayer = this.customizeMarkerLayer.bind(this);
  }

  ngOnInit(): void {
    this.selectedCountry = this.capacityData;
    // console.log('worldMap',this.worldMap)
  }

  handleChange(arg: any): void {
    this.selectedCountry =
      arg === 'All'
        ? this.capacityData
        : this.capacityData.filter((item) => item.country === arg);
  }



//   customizeMarkerLayer(elements) {
//     elements.forEach((element) => {
//         var color = element.attribute('color');
//         element.applySettings({
//             color: color,
//         });

//     });
// }
// customizeItems(items) {
//   items.forEach(item => {

//   });
//   return items.reverse();
// }

// customizeText(arg) {
//   return ['< 50', '50 to 150', '150 to 250', '250 to 500', '> 500'][arg.index];
// }

// // customizeTooltipSurplusDeficit(arg: any) {
// //   return {
// //       text: arg.seriesName + ", " + this.decimalPipe.transform(arg.valueText, "1.1-1") + " " + this.selectedUnitName,
// //   };
// // }

// // customizeTooltipDemandSupply(arg: any) {
// //   return {
// //       text: arg.seriesName + ", " + this.decimalPipe.transform(arg.valueText, "1.1-1") + " " + this.selectedUnitName + " (" + arg.percentText + ")",
// //   };
// // }

// customizeTooltip(arg: any) {
//   // if (arg.layer.type === 'marker') {
//       return {
//           text: `<div style="text-align: left;">${arg.attribute('tooltip')}</div>`,
//       };
//   // }
// }
}
