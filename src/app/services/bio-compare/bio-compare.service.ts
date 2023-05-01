import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BioCompareService {

  public contriesList: any[] = [
    {
      id: uuidv4(),
      name: 'Australia',
      regions: 'APAC',

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
      id: uuidv4(),
      name: 'Canada',
      regions: 'North America',

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
      id: uuidv4(),
      name: 'China',
      regions: 'APAC',

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
      id: uuidv4(),
      name: 'Brazil',
      regions: 'South America',

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
      id: uuidv4(),
      name: 'France',
      regions: 'Europe',

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
      id: uuidv4(),
      name: 'Germany',
      regions: 'Europe',

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
      id: uuidv4(),
      name: 'Italy',
      regions: 'Europe',

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
      id: uuidv4(),
      name: 'Malaysia',
      regions: 'APAC',

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
      id: uuidv4(),
      name: 'Nordics',
      regions: 'Europe',

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
      id: uuidv4(),
      name: 'South Korea',
      regions: 'APAC',
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
      id: uuidv4(),
      name: 'UK',
      regions: 'Europe',

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
      id: uuidv4(),
      name: 'USA',
      regions: 'North America',

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

 public timePeriods: any[] = [
    {
      TimePeriod: '2030-2040',
      Australia:
        'Australia 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      Canada:
        'Canada Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      China:
        'China Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Brazil:
        'Brazil Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      France:
        'France Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Germany:
        'Germany Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Italy:
        'Italy Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Malaysia:
        'Malaysia Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Nordics:
        'Nordics Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      SouthKorea:
        'South Korea Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      UK: 'UK Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      USA: 'USA Regulation 2030-2040 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
    },
    {
      TimePeriod: '2025-2029',
      Australia:
        'Australia 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      Canada:
        'Canada Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      China:
        'China Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Brazil:
        'Brazil Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      France:
        'France Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Germany:
        'Germany Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Italy:
        'Italy Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Malaysia:
        'Malaysia Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Nordics:
        'Nordics Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      SouthKorea:
        'South Korea Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      UK: 'UK Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      USA: 'USA Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
    },
    {
      TimePeriod: '2025-2029',
      Australia:
        'Australia 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      Canada:
        'Canada Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      China:
        'China Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Brazil:
        'Brazil Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      France:
        'France Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Germany:
        'Germany Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Italy:
        'Italy Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Malaysia:
        'Malaysia Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Nordics:
        'Nordics Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      SouthKorea:
        'South Korea Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      UK: 'UK Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      USA: 'USA Regulation 2025-2029 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
    },
    {
      TimePeriod: '2020-2024',
      Australia:
        'Australia 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      Canada:
        'Canada Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      China:
        'China Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Brazil:
        'Brazil Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      France:
        'France Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Germany:
        'Germany Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Italy:
        'Italy Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Malaysia:
        'Malaysia Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Nordics:
        'Nordics Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      SouthKorea:
        'South Korea Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      UK: 'UK Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      USA: 'USA Regulation 2020-2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
    },
    {
      TimePeriod: '2009-2019',
      Australia:
        'Australia 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      Canada:
        'Canada Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      China:
        'China Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Brazil:
        'Brazil Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      France:
        'France Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Germany:
        'Germany Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Italy:
        'Italy Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Malaysia:
        'Malaysia Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Nordics:
        'Nordics Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      SouthKorea:
        'South Korea Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      UK: 'UK Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      USA: 'USA Regulation 2009-2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
    },
    {
      TimePeriod: '2040-2050',
      Australia:
        'Australia 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      Canada:
        'Canada Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      China:
        'China Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Brazil:
        'Brazil Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      France:
        'France Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Germany:
        'Germany Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Italy:
        'Italy Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Malaysia:
        'Malaysia Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      Nordics:
        'Nordics Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      SouthKorea:
        'South Korea Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      UK: 'UK Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
      USA: 'USA Regulation 2040-2050 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
    },
  ]

  public criterias: any[] = [
    {
      Criterias: 'Regulation',
      Australia:
        'Australia Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Canada:
        'Canada Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      China:
        'China Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Brazil:
        'Brazil Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      France:
        'France Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Germany:
        'Germany Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Italy:
        'Italy Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Malaysia:
        'Malaysia Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Nordics:
        'Nordics Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      SouthKorea:
        'South Korea Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      UK: 'UK Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      USA: 'USA Regulation Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
    },
    {
      Criterias: 'Certification',
      Australia:
        'Australia Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Canada:
        'Canada Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      China:
        'China Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Brazil:
        'Brazil Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      France:
        'France Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Germany:
        'Germany Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Italy:
        'Italy Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Malaysia:
        'Malaysia Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Nordics:
        'Nordics Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      SouthKorea:
        'South Korea Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      UK: 'UK Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      USA: 'USA Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
    },
    {
      Criterias: 'Other',
      Australia:
        'Australia Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Canada:
        'Canada Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      China:
        'China Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Brazil:
        'Brazil Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      France:
        'France Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Germany:
        'Germany Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Italy:
        'Italy Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Malaysia:
        'Malaysia Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Nordics:
        'Nordics Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      SouthKorea:
        'South Korea Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      UK: 'UK Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      USA: 'USA Other Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
    },
    {
      Criterias: 'BioLubricantsDemand',
      Australia:
        'Australia BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Canada:
        'Canada BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      China:
        'China BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Brazil:
        'Brazil BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      France:
        'France BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Germany:
        'Germany BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Italy:
        'Italy BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Malaysia:
        'Malaysia BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Nordics:
        'Nordics BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      SouthKorea:
        'South Korea BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      UK: 'UK BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      USA: 'USA BioLubricantsDemand Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
    },
    {
      Criterias: 'OtherRemarks',
      Australia:
        'Australia OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Canada:
        'Canada OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      China:
        'China OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Brazil:
        'Brazil OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      France:
        'France OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Germany:
        'Germany OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Italy:
        'Italy OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Malaysia:
        'Malaysia OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      Nordics:
        'Nordics OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      SouthKorea:
        'South Korea OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      UK: 'UK OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
      USA: 'USA OtherRemarks Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus, odio asperiores iusto porro aliquam aliquid.',
    },
  ];

  constructor() { }
}
