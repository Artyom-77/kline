import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) {}


  public navigationItems = [
    // {
    //   path: '/',
    //   text: 'Home'
    // },
    {
      path: '/our-coverage',
      text: 'Our Coverage'
    },
    // {
    //   path: '/market-watch',
    //   text: 'Market Watch'
    // },
    // {
    //   path: '/insights',
    //   text: 'Insights'
    // }
  ]

  onItemClick(event: any) {
    const path = event.itemData.path;
    if (path) {
      this.router.navigate([path]);
    }
  }
}
