import { Component } from '@angular/core';
import {
  MapSetting,
  Marker,
  RrboService,
} from 'src/app/services/rrbo/rrbo.service';

@Component({
  selector: 'app-capacity-map-rrbo',
  templateUrl: './capacity-map-rrbo.component.html',
  styleUrls: ['./capacity-map-rrbo.component.scss'],
})
// export class MapSetting {
//   key: string;

//   name: string;
// }
export class CapacityMapRrboComponent {
  // mapTypes: MapSetting[] = [
  //   {
  //     key: 'roadmap',
  //     name: 'Road Map',
  //   },
  //   {
  //     key: 'satellite',
  //     name: 'Satellite (Photographic) Map',
  //   },
  //   {
  //     key: 'hybrid',
  //     name: 'Hybrid Map',
  //   },
  // ];
  // getMapTypes(): MapSetting[] {
  //   return this.mapTypes;
  // }
  mapTypes: MapSetting[];
  customMarkerUrl: string;

  mapMarkerUrl: string;

  originalMarkers: Marker[];

  markers: Marker[];
  keys: any = {};
  constructor(service: RrboService) {
    this.mapTypes = service.getMapTypes();
    this.keys['bing'] =
      'AtT_6S6HNv0CHmLGyavC3zzxSqE76igYhmudioJCcspySokNdN75eimgJZr_qk1S';
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
    this.originalMarkers = this.markers = service.getMarkers();
  }
}
