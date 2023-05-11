import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupplierProfilesService {
  public suppliersList: any[] = [
    {
      id: 1,
      Company: 'Bahrain Petroleum Company (BLBOC)',
      Location: 'Bahrain',
      City: 'Sitra',
      logo: '../../../assets/images/bahrain-logo.png',
      CapasityDesc:
        'Bahrain owns 55% of BLBOC’s capacity (BAPCO and NOGAholding with equal 27.5% shares), while Neste owns the remaining 45%. BAPCO operates the plant. Neste is attempting to sell all of its global base oil interests, including Porvoo and Bahrain.',
      SustainabilityMeasuresDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      BaseOilVisgradeYield: [
        {
          label: '4cSt',
          value: 4230,
        },
        {
          label: '6cSt',
          value: 3040,
        },
        {
          label: '8cSt',
          value: 1520,
        },
      ],
      BaseOilExports: [
        {
          label: 'USA',
          value: 30,
        },
        {
          label: 'China',
          value: 25,
        },
        {
          label: 'India',
          value: 20,
        },
        {
          label: 'South Korea',
          value: 10,
        },
        {
          label: 'Rest Of World',
          value: 10,
        },
      ],
      BaseOilSalesStructure: [
        {
          label: 'Neste',
          value: 4500,
        },
        {
          label: 'Shell',
          value: 3200,
        },
        {
          label: 'All Other',
          value: 2000,
        },
      ],

      BaseOilProduction: [
        { year: '2018', capacity: 250 },
        { year: '2019', capacity: 300 },
        { year: '2020', capacity: 350 },
        { year: '2021', capacity: 200 },
        { year: '2022', capacity: 150 },
      ],
      SustainabilityMeasures: [
        {
          value: 40,
          label: 'Parameter 1'
        },
        {
          value: 60,
          label: 'Parameter 2'
        },
        {
          value: 30,
          label: 'Parameter 3'
        },
        {
          value: 80,
          label: 'Parameter 4'
        },
      ],
      CurrentBaseOilCapacity: [
        {
          group: 'III',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
        {
          group: 'Total',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
      ],
    },
    {
      id: 2,
      Company: 'Abu Dhabi National Oil Company- ADNOC',
      Location: 'Abu Dhabi',
      City: 'Ruwais',
      logo: '../../../assets/images/abu-logo.png',
      CapasityDesc:
        'Bahrain owns 55% of BLBOC’s capacity (BAPCO and NOGAholding with equal 27.5% shares), while Neste owns the remaining 45%. BAPCO operates the plant. Neste is attempting to sell all of its global base oil interests, including Porvoo and Bahrain.',
      SustainabilityMeasuresDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      BaseOilVisgradeYield: [
        {
          label: '4cSt',
          value: 30,
        },
        {
          label: '6cSt',
          value: 40,
        },
        {
          label: '8cSt',
          value: 20,
        },
      ],
      BaseOilExports: [
        {
          label: 'USA',
          value: 30,
        },
        {
          label: 'China',
          value: 25,
        },
        {
          label: 'India',
          value: 20,
        },
        {
          label: 'South Korea',
          value: 10,
        },
        {
          label: 'Rest Of World',
          value: 10,
        },
      ],
      BaseOilSalesStructure: [
        {
          label: 'Neste',
          value: 4500,
        },
        {
          label: 'Shell',
          value: 3200,
        },
        {
          label: 'All Other',
          value: 2000,
        },
      ],
      BaseOilProduction: [
        { year: '2018', capacity: 250 },
        { year: '2019', capacity: 300 },
        { year: '2020', capacity: 350 },
        { year: '2021', capacity: 400 },
        { year: '2022', capacity: 450 },
      ],
      SustainabilityMeasures: [
        {
          value: 40,
          label: 'Parameter 1'
        },
        {
          value: 60,
          label: 'Parameter 2'
        },
        {
          value: 30,
          label: 'Parameter 3'
        },
        {
          value: 80,
          label: 'Parameter 4'
        },
      ],
      CurrentBaseOilCapacity: [
        {
          group: 'III',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
        {
          group: 'Total',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
      ],
    },
    {
      id: 3,
      Company: 'Shell',
      Location: 'Qatar',
      City: 'Ras Laffan',
      logo: '../../../assets/images/shell-logo.png',
      CapasityDesc:
        'Bahrain owns 55% of BLBOC’s capacity (BAPCO and NOGAholding with equal 27.5% shares), while Neste owns the remaining 45%. BAPCO operates the plant. Neste is attempting to sell all of its global base oil interests, including Porvoo and Bahrain.',
      SustainabilityMeasuresDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      BaseOilVisgradeYield: [
        {
          label: '4cSt',
          value: 30,
        },
        {
          label: '6cSt',
          value: 40,
        },
        {
          label: '8cSt',
          value: 20,
        },
      ],
      BaseOilExports: [
        {
          label: 'USA',
          value: 30,
        },
        {
          label: 'China',
          value: 25,
        },
        {
          label: 'India',
          value: 20,
        },
        {
          label: 'South Korea',
          value: 10,
        },
        {
          label: 'Rest Of World',
          value: 10,
        },
      ],
      BaseOilSalesStructure: [
        {
          label: 'Neste',
          value: 4500,
        },
        {
          label: 'Shell',
          value: 3200,
        },
        {
          label: 'All Other',
          value: 2000,
        },
      ],
      BaseOilProduction: [
        { year: '2018', capacity: 250 },
        { year: '2019', capacity: 300 },
        { year: '2020', capacity: 350 },
        { year: '2021', capacity: 400 },
        { year: '2022', capacity: 450 },
      ],
      SustainabilityMeasures: [
        {
          value: 40,
          label: 'Parameter 1'
        },
        {
          value: 60,
          label: 'Parameter 2'
        },
        {
          value: 30,
          label: 'Parameter 3'
        },
        {
          value: 80,
          label: 'Parameter 4'
        },
      ],
      CurrentBaseOilCapacity: [
        {
          group: 'III',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
        {
          group: 'Total',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
      ],
    },
    {
      id: 4,
      Company: 'Petronas',
      Location: 'Malaysia',
      City: 'Kuala Lumpur',
      logo: '../../../assets/images/petronas-logo.png',
      CapasityDesc:
        'Bahrain owns 55% of BLBOC’s capacity (BAPCO and NOGAholding with equal 27.5% shares), while Neste owns the remaining 45%. BAPCO operates the plant. Neste is attempting to sell all of its global base oil interests, including Porvoo and Bahrain.',
      SustainabilityMeasuresDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      BaseOilVisgradeYield: [
        {
          label: '4cSt',
          value: 30,
        },
        {
          label: '6cSt',
          value: 40,
        },
        {
          label: '8cSt',
          value: 20,
        },
      ],
      BaseOilExports: [
        {
          label: 'USA',
          value: 30,
        },
        {
          label: 'China',
          value: 25,
        },
        {
          label: 'India',
          value: 20,
        },
        {
          label: 'South Korea',
          value: 10,
        },
        {
          label: 'Rest Of World',
          value: 10,
        },
      ],
      BaseOilSalesStructure: [
        {
          label: 'Neste',
          value: 4500,
        },
        {
          label: 'Shell',
          value: 3200,
        },
        {
          label: 'All Other',
          value: 2000,
        },
      ],
      BaseOilProduction: [
        { year: '2018', capacity: 250 },
        { year: '2019', capacity: 300 },
        { year: '2020', capacity: 350 },
        { year: '2021', capacity: 400 },
        { year: '2022', capacity: 450 },
      ],
      SustainabilityMeasures: [
        {
          value: 40,
          label: 'Parameter 1'
        },
        {
          value: 60,
          label: 'Parameter 2'
        },
        {
          value: 30,
          label: 'Parameter 3'
        },
        {
          value: 80,
          label: 'Parameter 4'
        },
      ],
      CurrentBaseOilCapacity: [
        {
          group: 'III',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
        {
          group: 'Total',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
      ],
    },
    {
      id: 5,
      Company: 'SK',
      Location: 'Indonesia',
      City: 'Singapore',
      logo: '../../../assets/images/sk-logo.png',
      CapasityDesc:
        'Bahrain owns 55% of BLBOC’s capacity (BAPCO and NOGAholding with equal 27.5% shares), while Neste owns the remaining 45%. BAPCO operates the plant. Neste is attempting to sell all of its global base oil interests, including Porvoo and Bahrain.',
      SustainabilityMeasuresDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      BaseOilVisgradeYield: [
        {
          label: '4cSt',
          value: 30,
        },
        {
          label: '6cSt',
          value: 40,
        },
        {
          label: '8cSt',
          value: 20,
        },
      ],
      BaseOilExports: [
        {
          label: 'USA',
          value: 30,
        },
        {
          label: 'China',
          value: 25,
        },
        {
          label: 'India',
          value: 20,
        },
        {
          label: 'South Korea',
          value: 10,
        },
        {
          label: 'Rest Of World',
          value: 10,
        },
      ],
      BaseOilSalesStructure: [
        {
          label: 'Neste',
          value: 4500,
        },
        {
          label: 'Shell',
          value: 3200,
        },
        {
          label: 'All Other',
          value: 2000,
        },
      ],
      BaseOilProduction: [
        { year: '2018', capacity: 250 },
        { year: '2019', capacity: 300 },
        { year: '2020', capacity: 350 },
        { year: '2021', capacity: 400 },
        { year: '2022', capacity: 450 },
      ],
      SustainabilityMeasures: [
        {
          value: 40,
          label: 'Parameter 1'
        },
        {
          value: 60,
          label: 'Parameter 2'
        },
        {
          value: 30,
          label: 'Parameter 3'
        },
        {
          value: 80,
          label: 'Parameter 4'
        },
      ],
      CurrentBaseOilCapacity: [
        {
          group: 'III',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
        {
          group: 'Total',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
      ],
    },
    {
      id: 6,
      Company: 'S-Oil',
      Location: 'South Korea',
      City: 'Seoul',
      logo: '../../../assets/images/s-oil-logo.png',
      CapasityDesc:
        'Bahrain owns 55% of BLBOC’s capacity (BAPCO and NOGAholding with equal 27.5% shares), while Neste owns the remaining 45%. BAPCO operates the plant. Neste is attempting to sell all of its global base oil interests, including Porvoo and Bahrain.',
      SustainabilityMeasuresDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      BaseOilVisgradeYield: [
        {
          label: '4cSt',
          value: 30,
        },
        {
          label: '6cSt',
          value: 40,
        },
        {
          label: '8cSt',
          value: 20,
        },
      ],
      BaseOilExports: [
        {
          label: 'USA',
          value: 30,
        },
        {
          label: 'China',
          value: 25,
        },
        {
          label: 'India',
          value: 20,
        },
        {
          label: 'South Korea',
          value: 10,
        },
        {
          label: 'Rest Of World',
          value: 10,
        },
      ],
      BaseOilSalesStructure: [
        {
          label: 'Neste',
          value: 4500,
        },
        {
          label: 'Shell',
          value: 3200,
        },
        {
          label: 'All Other',
          value: 2000,
        },
      ],
      BaseOilProduction: [
        { year: '2018', capacity: 250 },
        { year: '2019', capacity: 300 },
        { year: '2020', capacity: 350 },
        { year: '2021', capacity: 400 },
        { year: '2022', capacity: 450 },
      ],
      SustainabilityMeasures: [
        {
          value: 40,
          label: 'Parameter 1'
        },
        {
          value: 60,
          label: 'Parameter 2'
        },
        {
          value: 30,
          label: 'Parameter 3'
        },
        {
          value: 80,
          label: 'Parameter 4'
        },
      ],
      CurrentBaseOilCapacity: [
        {
          group: 'III',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
        {
          group: 'Total',
          'B/SD': '9,060',
          '000 Tonnes/Year': '400',
        },
      ],
    },
  ];
  constructor() {}
}
