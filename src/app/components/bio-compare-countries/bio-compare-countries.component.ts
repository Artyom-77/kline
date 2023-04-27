import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-bio-compare-countries',
  templateUrl: './bio-compare-countries.component.html',
  styleUrls: ['./bio-compare-countries.component.scss'],
})
export class BioCompareCountriesComponent implements OnInit {
  public isCountryOpen: boolean = false;
  public selectedCountry: any[] = [];
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
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'Canada',
      regions: 'North America',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'China',
      regions: 'APAC',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },

    {
      id: this.uniqueId,
      name: 'Brazil',
      regions: 'South America',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'France',
      regions: 'Europe',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'Germany',
      regions: 'Europe',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'Italy',
      regions: 'Europe',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'Malaysia',
      regions: 'APAC',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'Nordics',
      regions: 'Europe',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'South Korea',
      regions: 'APAC',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'UK',
      regions: 'Europe',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
    {
      id: this.uniqueId,
      name: 'USA',
      regions: 'North America',
      criterias: [
        {
          name: 'Regulation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'second',
        },
        {
          name: 'Certification Program',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: 'first',
        },
        {
          name: 'Other',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'third',
        },
        {
          name: 'Impact On Bio-Lubricants Demand',
          text: 'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
          tabName: 'forth',
        },
        {
          name: 'Other Remarks',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          tabName: '',
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2015,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2020,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2025,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2030,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet neque sed nibh congue luctus ac id ante.',
          year: 2035,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          year: 2040,
        },
      ],
    },
  ];
  public curent_data: any[] = [];
  public curent_data_times: any[] = [];
  constructor() {}

  ngOnInit(): void {
    // const x:any  = JSON.pasr(this.route.snapshot.params.timePeriods)
    // console.log('this.route.snapshot.queryParams', x);
    // this.route.queryParams.subscribe(params => {
    //   this.myData = params['data'];
    //   console.log('this.myData', params);
    // });
    this.curent_data = this.contriesList.map((item) => item.criterias);
    console.log('this.curent_data',this.curent_data)
  }

  toggleCountryDropdown() {
    this.isCountryOpen = !this.isCountryOpen;
  }

  onOutclickCountry() {
    if (this.isCountryOpen === true) {
      this.isCountryOpen = false;
    }
  }

  toggleCountryOption(option: string): void {
    // this.selectedCountry = option;
    const index = this.selectedCountry.indexOf(option);
    if (index > -1) {
      this.selectedCountry.splice(index, 1);
    } else {
      if(this.selectedCountry.length <= 4) {
        this.selectedCountry.push(option);
        //  this.contriesList.map(
        //   (item: any) =>{
        //     if(this.selectedCountry.includes(item.name)){
        //       this.curent_data_times.push(item.timePeriods)
        //     }
        //     }
        // );
      }
    }
    console.log('curent_data', this.curent_data);
    console.log('this.curent_data_times', this.curent_data_times);

  }
}
