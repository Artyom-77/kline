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
  public sustainabilityList: any[] = [];
  public isModalVisible: boolean = false;
  public navigationItems = [
    {
      path: "/",
      text: "Home",
      id: 1,
    },
    {
      // path: '/our-coverage',
      text: "Market Fundamentals",
      id: 2,
    },
    {
      // path: '/our-coverage',
      text: "Sustainability",
      id: 3,
    },
    {
      // path: '/our-coverage',
      text: "Market Watch",
      id: 4,
    },
  ];
public pathname : any
  constructor(private router: Router, private service: LandingServiceService, public location : Location) {
    this.coveragesList = service.coveragesList

    // this.marketList = service.coveragesList.filter((item, index) => index == 3);
  }

  ngOnInit(): void {
    this.coveragesList = this.service.getCoveragesList().filter((item,index)=> index === 0 || index === 2);
    this.sustainabilityList = this.service.getCoveragesList().filter((item,index)=> index === 1 );
    this.marketList = this.service.getCoveragesList().filter((item,index)=> index === 3);
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
    if (id === 2 || id === 3 || id === 4) {
      this.navId = id;
      this.dropdownOpen = !this.dropdownOpen;
    }
    // const path = event.itemData.path;
    if (event) {
      if (event !== 2 || id !== 3 || id !== 4) {
        this.router.navigate([event]);
        this.dropdownOpen = false;
      }
    }
  }
  openModal() {
    this.isModalVisible = true;
    document.querySelector('.kline-app')?.classList.add('fixed');
  }
  onCloseModal() {
    this.isModalVisible = false;
    document.querySelector('.kline-app')?.classList.remove('fixed');
  }
}
