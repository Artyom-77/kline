import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-bio-basestocks',
  templateUrl: './bio-basestocks.component.html',
  styleUrls: ['./bio-basestocks.component.scss'],
})
export class BioBasestocksComponent implements OnInit {
  public uniqueId: any = uuidv4();
  public contriesList: any[] = [
    {
      id: this.uniqueId,
      name: 'Australia',
      regions: 'APAC',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
      timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },

      ]
    },
    {
      id: this.uniqueId,
      name: 'Canada',
      regions: 'North America',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'China',
      regions: 'APAC',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'France',
      regions: 'Europe',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'Brazil',
      regions: 'South America',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'France',
      regions: 'Europe',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'Germany',
      regions: 'Europe',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
       timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'Italy',
      regions: 'Europe',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'Malaysia',
      regions: 'APAC',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'Nordics',
      regions: 'Europe',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'South Korea',
      regions: 'APAC',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'UK',
      regions: 'Europe',
       criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
    {
      id: this.uniqueId,
      name: 'USA',
      regions: 'North America',
      criterias: [
           {
            name: 'Regulation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'second'
          },
           {
            name: 'Certification Program',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: 'first'
          },
          {
            name : 'Other',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'third'
          },
           {
            name: 'Impact On Bio-Lubricants Demand',
            text:  'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
            tabName: 'forth'
          },
           {
            name: 'Other Remarks',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            tabName: ''
          },
      ],
       timePeriods: [
        {
          timePeriod: '2030-2040',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2025-2029',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2020-2024',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          timePeriod: '2009-2019',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        },
        {
          timePeriod: '2040-2050',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ],
      timeline: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2015
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2025
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.",
          year: 2035
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040
        },
      ]
    },
  ];
  public selectedTab: string = 'first';
  public regionsList: any[] = [
    'All',
    'North America',
    'Middle East and Africa',
    'Europe',
    'APAC',
    'South America',
  ];
  public isRegionOpen: boolean = false;
  public isCountryOpen: boolean = false;
  public selectedRegion: string = '';
  public selectedCountry: string = 'Brazil';
  public curent_data: any = {};
  public route: any
  constructor(private router: Router ) {
    this.route = this.router
  }
  ngOnInit(): void {
    console.log(this.route)
    this.curent_data = this.contriesList.find(
      (item: any) => item.name == this.selectedCountry
    );
  }
  onCLick(section: string) {
    this.selectedTab = section;
  }

  toggleDateDropdown() {
    this.isRegionOpen = !this.isRegionOpen;
  }
  toggleDateOption(option: string): void {
    this.selectedRegion = option;
  }
  onOutclickDate() {
    if (this.isRegionOpen === true) {
      this.isRegionOpen = false;
    }
  }

  toggleCountryDropdown() {
    this.isCountryOpen = !this.isCountryOpen;
  }
  toggleCountryOption(option: string): void {
    this.selectedCountry = option;
    this.curent_data = this.contriesList.find(
      (item: any) => item.name == this.selectedCountry
    );
  }
  onOutclickCountry() {
    if (this.isCountryOpen === true) {
      this.isCountryOpen = false;
    }
  }
}
