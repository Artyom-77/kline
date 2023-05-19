import { Component, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-wall-tabs',
  templateUrl: './wall-tabs.component.html',
  styleUrls: ['./wall-tabs.component.scss']
})
export class WallTabsComponent implements OnInit {

  public coveragesList : any[] = []
  public selectedTab: number = 8;
  public selectedItem: any | undefined;
  constructor( private service: LandingServiceService  ) {}

  ngOnInit(): void {
      this.coveragesList = this.service.coveragesList
  }
  openDetails(item , idx: number) {
      this.selectedTab = idx
      this.selectedItem = item
  }
}
