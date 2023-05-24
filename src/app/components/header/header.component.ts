import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  // @Input() myProp: string | undefined;
  public dropdownOpen: boolean = false;
  public navId: any;
  public coveragesList: any[] = [];
  public marketList: any[] = [];
  public navigationItems = [
    {
      path: '/',
      text: 'Home',
      id: 1,
    },
    {
      // path: '/our-coverage',
      text: 'Our Coverage',
      id: 2,
    },
    // {
    //   // path: '/market-watch',
    //   text: 'Market Watch',
    //   id: 3,
    // },
    // {
    //   path: '/insights',
    //   text: 'Insights',
    //   id: 4,
    // },
    // {
    //   path: '/contant-us',
    //   text: 'Contact Us',
    //   id: 5,
    // },
    // {
    //   path: '/faq',
    //   text: 'FAQ',
    //   id: 6,
    // },
  ];
public pathname : any
  constructor(private router: Router, private service: LandingServiceService, public location : Location) {
    this.coveragesList = service.coveragesList
    // this.marketList = service.coveragesList.filter((item, index) => index == 3);
  }

  ngOnInit(): void {
    this.pathname = this.location.path();
    console.log('this.location',this.location.path());

  }
  ngOnChanges(): void {
    this.pathname = this.location.path();
    console.log('this.location',this.location.path());
  }

  onOutclick() {
    console.log('this.dropdownOpen',this.dropdownOpen)
    if (this.dropdownOpen === true) {
      this.dropdownOpen = false;
    }
  }

  onItemClick(event: any, id: any) {
    if (id === 2 || id === 3) {
      this.navId = id;
      this.dropdownOpen = !this.dropdownOpen;
    }
    // const path = event.itemData.path;
    if (event) {
      if (event !== 2 || id !== 3) {
        this.router.navigate([event]);
        this.dropdownOpen = false;
      }
    }
  }
}
