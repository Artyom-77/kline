import { Component, Input, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.scss']
})
export class BreadcrumpsComponent implements OnInit {
  @Input() breadcrumpData: any[] | undefined;


  constructor(private service:LandingServiceService){}
  ngOnInit(): void {
      console.log('breadcrumpData',this.breadcrumpData)
      // console.log(this.service.coveragesList)
  }
}
