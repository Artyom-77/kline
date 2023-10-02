import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';

interface SelectedDashboard {
  id: string;
  name: string;
  widgets: any[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  public isDrawerOpen: boolean = true;
  public createWidgetModalVisible: boolean = false;
  public widgetTypeTab: string = 'templates';
  public dashboardsList: any[] = [
    {
      id: String(Math.random() * 1000000000000000000000000000000000000),
      name: 'My Dashbard',
      widgets: [1, 2],
    },
  ];
  public selectedDashboard: SelectedDashboard = {
    id: '',
    name: '',
    widgets: [],
  };
  public openCreateDashboard: boolean = false;
  public dashboardTitle: string = '';
  constructor() {}

  ngOnInit() {
    this.selectedDashboard = this.dashboardsList[0];
  }

  addNewDashboard() {
    if (this.dashboardTitle !== '') {
      this.dashboardsList.push({
        id: String(Math.random() * 1000000000000000000000000000000000000),
        name: this.dashboardTitle,
        widgets: [],
      });
      this.dashboardTitle = '';
      this.openCreateDashboard = false;
    }
    // console.log('this.dashboardsList', this.dashboardsList);
  }

  showSelectedDashborad(idx) {
    this.dashboardsList.forEach((item) => {
      if (item.id === idx) {
        this.selectedDashboard = item;
      }
    });
    this.isDrawerOpen = false;
    console.log('this.selectedDashboard', this.selectedDashboard);
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
    {
      widget: 'dxButton',
      location: 'after',
      options: {
        text: 'Create Widget',
        onClick: () => (this.createWidgetModalVisible = true),
      },
    },
  ];
}
