import { Component, OnInit } from '@angular/core';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.scss']
})
export class BreadcrumpsComponent implements OnInit {
  constructor(private service:LandingServiceService){}
  ngOnInit(): void {
      // console.log(window.location.pathname)
      // console.log(this.service.coveragesList)
  }
}
