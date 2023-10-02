import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  public isDrawerOpen: boolean = true;
  public tab1: boolean = false;
  public dashboardsList: any[] = [
    {
      id: String(Math.random() * 1000000000000000000000000000000000000),
      name: 'My Dashbard',
    },
  ];
  public openCreateDashboard: boolean = false;
  public dashboardTitle: string = '';
  constructor() {}

  ngOnInit() {}

  addNewDashboard() {
    if (this.dashboardTitle !== '') {
      this.dashboardsList.push({
        id: String(Math.random() * 1000000000000000000000000000000000000),
        name: this.dashboardTitle,
      });
      this.dashboardTitle = '';
      this.openCreateDashboard = false;
    }
    console.log('this.dashboardsList', this.dashboardsList);
  }

  toolbarContent = [
    {
      widget: 'dxButton',
      location: 'before',
      options: {
        icon: 'menu',
        onClick: () => (this.isDrawerOpen = !this.isDrawerOpen),
      },
    },
  ];
}
