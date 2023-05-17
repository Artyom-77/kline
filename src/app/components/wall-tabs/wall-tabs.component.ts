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
      // console.log('this.coveragesList', this.coveragesList)
  }
  openDetails(item , idx: number) {
    // setTimeout(() => {
      this.selectedTab = idx
      this.selectedItem = item
    // }, 300);
    console.log('this.selectedItem',this.selectedItem)
  }
}
