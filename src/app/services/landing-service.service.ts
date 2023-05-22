import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class LandingServiceService {
  private scrollToValue = new BehaviorSubject<any>(window.scrollY);
  public coveragesList: any[] = [
    {
      id: uuidv4(),
      title: 'Market Fundamentals',
      subtitle: 'Group I, II, III, Naphthenic',
      list: [
        {
          itemId: uuidv4(),
          path: '/basestocks-introduction-overview',
          name: 'Basestocks Introduction Overview',
        },
        {
          itemId: uuidv4(),
          path: '/conventional-basestocks',
          name: 'Conventional Basestocks Supply and Demand Model',
        },
        {
          itemId: uuidv4(),
          path: '/paraffinic-price',
          name: 'Paraffinic Price Forecast Model',
        },
        {
          itemId: uuidv4(),
          path: '/naphthenic-price',
          name: 'Naphthenic Price Forecast Model',
        },
        {
          itemId: uuidv4(),
          path: '/manufacturing-cost',
          name: 'Manufacturing Cost Model',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Market Fundamentals',
      subtitle: 'Group III/III+, IV, and V',
      list: [
        {
          itemId: uuidv4(),
          path: '/synthetic-basestocks',
          name: 'Synthetic Basestocks Deblend Model',
        },
        {
          itemId: uuidv4(),
          path: '/pao-demand',
          name: 'PAO Demand Deblend Model',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Sustainability focused Basestocks',
      subtitle: '',
      list: [
        {
          itemId: uuidv4(),
          path: '/bio-basestocks',
          name: 'Bio-Basestocks—Regulatory Environment and Changes',
        },
        {
          itemId: uuidv4(),
          path: '/rrbo',
          name: 'RRBO—Regulations, Capacity Map, and Material Balance',
        },
        {
          itemId: uuidv4(),
          path: '/routes-to-decarbonization',
          name: 'Routes to Decarbonization',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Basestock Market Watch',
      subtitle: '',
      list: [
        {
          itemId: uuidv4(),
          path: '/blender-database',
          name: 'Finished Lubricant Blender Database',
        },
        {
          itemId: uuidv4(),
          path: '/supplier-profiles',
          name: 'Supplier Profiles and Competitive Landscape',
        },
        {
          itemId: uuidv4(),
          path: 'product-properties',
          name: 'Product Properties and Specification Sheets',
        },
      ],
    },
  ];

  public infoTabData: any[] = [
    {
      id: 1,
      name: 'Synthetic Basestock Model',
      path: 'synthetic-basestocks',
      selectedTab: 2,
    },
    {
      id: 2,
      name: 'PAO Demand Model',
      path: 'pao-demand',
      selectedTab: 2,
    },
    {
      id: 3,
      name: 'RRBO Material Balance',
      path: 'rrbo',
      selectedTab: 3,
    },
    {
      id: 4,
      name: 'Competitive Landscape',
      path: 'supplier-profiles',
      selectedTab: 2,
    },
  ];
  public infoTabMapsData: any[] = [
    {
      id: 1,
      name: 'Finished Lubricant Blender Database',
      path: 'blender-database',
      // selectedTab: 2,
    },
    {
      id: 2,
      name: 'RRBO Capacity Map',
      path: 'rrbo',
      selectedTab: 2,
    },
    {
      id: 3,
      name: 'Synthetic Basestock Database',
      path: 'synthetic-basestocks',
      // selectedTab: 2,
    },
    {
      id: 4,
      name: 'PAO Demand Database',
      path: 'pao-demand',
      // selectedTab: 2,
    },
  ];

  public infoSecondaryTabData: any[] = [
    {
      id: 1,
      name: 'Reports & Presentations',
      path:'insights'
    },
    {
      id: 2,
      name: 'Quarterly Newsletters',
      path: 'insights'
    },
    {
      id: 3,
      name: 'Webinars',
      path:'insights'
    },
  ];

  constructor() {}

  getTopPosition() {
    return this.scrollToValue;
  }
}
