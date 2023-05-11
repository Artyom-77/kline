import { Component, OnInit } from '@angular/core';
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
  constructor(service: RrboService) {
    this.mapTypes = service.getMapTypes();
    this.capacityData = service.capacityData;
    // this.keys['bing'] =
    //   'AtT_6S6HNv0CHmLGyavC3zzxSqE76igYhmudioJCcspySokNdN75eimgJZr_qk1S';
    this.keys['google'] =
      'AIzaSyCdOxElq-laCN8DL0YXZMquRTjlvWnjog8';
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
    this.originalMarkers = this.markers = service.getMarkers();
  }

  ngOnInit(): void {
    console.log('this.capacityData', this.capacityData);
    this.selectedCountry = this.capacityData;
  }

  handleChange(arg: any): void {
    this.selectedCountry =
      arg === 'All'
        ? this.capacityData
        : this.capacityData.filter((item) => item.country === arg);
  }
}
