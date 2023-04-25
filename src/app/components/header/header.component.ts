import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService } from 'src/app/services/landing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
    {
      // path: '/market-watch',
      text: 'Market Watch',
      id: 3,
    },
    {
      path: '/insights',
      text: 'Insights',
      id: 4,
    },
  ];

  constructor(private router: Router, private service: LandingServiceService) {
    this.coveragesList = service.coveragesList.filter(
      (item, index) => index !== 3
    );
    this.marketList = service.coveragesList.filter((item, index) => index == 3);
  }

  ngOnInit(): void {}

  onOutclick() {
    if (this.dropdownOpen === true) {
      this.dropdownOpen = false;
    }
  }

  onItemClick(event: any, id: any) {
    if (id === 2 || id === 3) {
      this.navId = id;
      this.dropdownOpen = true;
    }
    console.log('event', event);
    // const path = event.itemData.path;
    if (event) {
      if (event !== 2 || id !== 3) {
        this.router.navigate([event]);
        this.dropdownOpen = false;
      }
    }
  }
}
