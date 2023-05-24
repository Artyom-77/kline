import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-wall-tabs',
  templateUrl: './wall-tabs.component.html',
  styleUrls: ['./wall-tabs.component.scss']
})
export class WallTabsComponent implements OnInit {
  @Input() wallData : any;
  @Input() wallType : string;
  public coveragesList : any[] = []
  public selectedTab: number = 8;
  public selectedItem: any | undefined;
  constructor( private service: LandingServiceService  ) {}

  ngOnInit(): void {
      if(this.wallType === 'countries') {
        this.coveragesList = this.wallData.criterias.filter((item:any,index:any)=>index !== 4)
      } else {
        this.coveragesList = this.wallData
      }
  }
  openDetails(item , idx: number) {
    if(this.selectedTab === 5) {
      this.selectedTab = -1
    } else {
      this.selectedTab = idx
      this.selectedItem = item
    }
  }
}
