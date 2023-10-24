import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
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
export class DashboardComponent implements OnInit, OnChanges {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  public isDrawerOpen: boolean = true;
  public createWidgetModalVisible: boolean = false;
  public widgetTypeTab: string = 'templates';
  public dashboardsList: any[] = [
    {
      id: String(Math.random() * 1000000000000000000000000000000000000),
      name: 'My Dashbard',
      widgets: [],
    },
  ];
  public selectedDashboard: SelectedDashboard = {
    id: '',
    name: '',
    widgets: [],
  };
  public openCreateDashboard: boolean = false;
  public dashboardTitle: string = '';
  public widgetsList: any[] = [
    {
      id: String(Math.random() * 1000000000000000000000000000000000000),
      widget: 'Templetes',
      types: [
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Battle Cards {Template}',
          desc: 'Map or create your sales moves based on strategic and operational facts of your competition.',
          selected: false,
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Company Profile {Template}',
          desc: "This is a template to draw a competitor's/client's profile.",
          selected: false,
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Corporate Development {Template}',
          desc: 'Create a corporate development strategy based on critical developments of targeted companies.',
          selected: false,
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Win-Loss Analysis {Template}',
          desc: 'Execute win-loss analysis by analyzing relevant variables like total wins/loss, customer feedback, driving/restraining variables, etc.',
          selected: false,
        },
      ],
    },
    {
      id: String(Math.random() * 1000000000000000000000000000000000000),
      widget: 'Contify Library',
      types: [
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Business Expansion Trend',
          desc: 'Date-wise timeline of business expansion news',
          selected: false,
          variant: 'line',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Negative/Adverse News of Targeted Companies',
          desc: 'Negative/Adverse mentions of targeted companies to track the current pain point at strategic and operational level',
          selected: false,
          variant: 'bar',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'M&A Trendline',
          desc: 'M&A timeline of targeted companies to track the most active period of inorganic activities ',
          selected: false,
          variant: 'line',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'New Offering Product Development by Company',
          desc: 'Periodic count of company developments for new offering/product development ',
          selected: false,
          variant: 'bar',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'New Offering Product Development',
          desc: '',
          selected: false,
          variant: 'one-list',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: '<Company Name> Strategic Benchmarking',
          desc: 'A benchmarking company by business, geography, and/or any other variable ',
          selected: false,
          variant: 'group-list',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: '<Company Name> Industries',
          desc: "Map the company's industry coverage to understand the focus areas",
          selected: false,
          variant: 'one-list',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Key Competitive Themes vs. <Competitor X>',
          desc: 'Mapping of competitors with important MACRO, technological, strategic, and other themes ',
          selected: false,
          variant: 'titled-list',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Engaging vs. <Competitor X>',
          desc: '',
          selected: false,
          variant: 'titled-list',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: 'Battle Card_Kill Points',
          desc: '',
          selected: false,
          variant: 'one-list',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: '<Company Name> Strategy Mix',
          desc: 'Explore the strategic mix of the company to understand the focused strategies',
          selected: false,
          variant: 'pie',
        },
        {
          id: String(Math.random() * 1000000000000000000000000000000000000),
          type: '<Company Name> Business Revenue Mix',
          desc: 'Explore revenue contribution of reported business segments of company',
          selected: false,
          variant: 'pie',
        },
      ],
    },
  ];
  public toolbarContent: any[] = [];
  public selectedWidgetTypes: any[] = [];
  public selectedTemplate: any[] = [];
  public autocompleteDataSource: any[] = [
    'CEO',
    'COO',
    'CTO',
    'CMO',
    'HR Manager',
    'IT Manager',
    'Controller',
    'Sales Manager',
    'Support Manager',
  ];
  public selectedLibraries: any[] = [];
  public showedWidgetsList: any[] = [];

  public dummyLineData: any[] = [
    {
      year: 1997,
      smp: 263,
      mmp: 208,
      cnstl: 9,
      cluster: 1,
    },
    {
      year: 1999,
      smp: 169,
      mmp: 270,
      cnstl: 61,
      cluster: 7,
    },
    {
      year: 2001,
      smp: 57,
      mmp: 261,
      cnstl: 157,
      cluster: 45,
    },
    {
      year: 2003,
      smp: 0,
      mmp: 154,
      cnstl: 121,
      cluster: 211,
    },
    {
      year: 2005,
      smp: 0,
      mmp: 97,
      cnstl: 39,
      cluster: 382,
    },
    {
      year: 2007,
      smp: 0,
      mmp: 83,
      cnstl: 3,
      cluster: 437,
    },
  ];

  public dummyPieData: any[] = [
    {
      country: 'Russia',
      area: 12,
    },
    {
      country: 'Canada',
      area: 7,
    },
    {
      country: 'USA',
      area: 7,
    },
    {
      country: 'China',
      area: 7,
    }
  ];


  constructor() {}

  ngOnInit() {
    this.selectedDashboard = this.dashboardsList[0];
    this.toolbarContent = [
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
        location: 'before',
        options: {
          text: this.selectedDashboard.name,
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
  ngOnChanges() {}

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
        this.toolbarContent = [
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
            location: 'before',
            options: {
              text: this.selectedDashboard.name,
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
    });
    this.isDrawerOpen = false;
    console.log('this.selectedDashboard', this.selectedDashboard);
  }

  handlePropertyChange(item) {
    if (item.addedItems.length) {
      item.addedItems[0].selected = true;
      this.selectedLibraries.push(item.addedItems[0]);
    } else {
      item.removedItems[0].selected = false;
      this.selectedLibraries = this.selectedLibraries.filter(
        (elem) => item.removedItems[0].id !== elem.id
      );
    }
    console.log('this.selectedLibraries', this.selectedLibraries);
  }

  addWidgets() {
    if (this.selectedLibraries.length) {
      this.selectedLibraries.forEach((elem) => {
        this.selectedDashboard.widgets.push(elem);
      });
      console.log('this.showedWidgetsList', this.showedWidgetsList);

      this.selectedLibraries = [];
      this.createWidgetModalVisible = false;
    }
  }

  setSelectedTemplate(item) {
    this.selectedTemplate[0] = item;
  }

  updateEmployeeInfo(e) {
    // let result = '';
    // result += (`${this.firstName || ''} ${this.lastName || ''}`).trim();
    // result += (result && this.position) ? (`, ${this.position}`) : this.position || '';
    // result += (result && this.state) ? (`, ${this.state}`) : this.state || '';
    // result += (result && this.currentClient) ? (`, ${this.currentClient}`) : this.currentClient || '';
    // this.fullInfo = result;
  }
}
