import { Component, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-basestocks-introduction-overview',
  templateUrl: './basestocks-introduction-overview.component.html',
  styleUrls: ['./basestocks-introduction-overview.component.scss']
})
export class BasestocksIntroductionOverviewComponent implements OnInit {

  public basestockOverviewData: any[] = []


  constructor(private service: LandingServiceService) {}

  ngOnInit(): void {
      this.basestockOverviewData = this.service.basestockOverviewData
      console.log('basestockOverviewData',this.basestockOverviewData)
  }
}
