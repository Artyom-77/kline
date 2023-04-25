import { Component, OnInit } from '@angular/core';
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
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'Canada',
      regions: 'North America',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'China',
      regions: 'APAC',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'France',
      regions: 'Europe',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'Brazil',
      regions: 'South America',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'France',
      regions: 'Europe',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'Germany',
      regions: 'Europe',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'Italy',
      regions: 'Europe',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'Malaysia',
      regions: 'APAC',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'Nordics',
      regions: 'Europe',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'South Korea',
      regions: 'APAC',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'UK',
      regions: 'Europe',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
    },
    {
      id: this.uniqueId,
      name: 'USA',
      regions: 'North America',
      criterias: {
        regulation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        certificationProgram:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        other:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        impactOnBioLubricantsDemand:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        otherRemarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
      timePeriods: {
        from2030to2040:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2025to2029:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2020to2024:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2009to2019:
          'Lorem ipsure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        from2040to2050:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
      },
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
  ngOnInit(): void {
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
