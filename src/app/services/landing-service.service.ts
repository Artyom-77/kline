import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LandingServiceService {
  public uniqueId: any = uuidv4();
  private scrollToValue = new BehaviorSubject<any>(window.scrollY)
  public coveragesList: any[] = [
    {
      id: this.uniqueId,
      title: 'Market Fundamentals',
      subtitle: 'Group I, II, III, Naphthenic',
      list: [
        {
          itemId: this.uniqueId,
          path: '/basestocks-introduction-overview',
          name: 'Basestocks Introduction Overview'
        },
        {
          itemId: this.uniqueId,
          path: '/conventional-basestocks',
          name: 'Conventional Basestocks Supply and Demand Model'
        },
        {
          itemId: this.uniqueId,
          path: '/paraffinic-price',
          name: 'Paraffinic Price Forecast Model'
        },
        {
          itemId: this.uniqueId,
          path: '/naphthenic-price',
          name: 'Naphthenic Price Forecast Model'
        },
        {
          itemId: this.uniqueId,
          path: '/manufacturing-cost',
          name: 'Manufacturing Cost Model'
        },
      ]
    },
    {
      id: this.uniqueId,
      title: 'Market Fundamentals',
      subtitle: 'Group III/III+, IV, and V',
      list: [
        {
          itemId: this.uniqueId,
          path: '/synthetic-basestocks',
          name: 'Synthetic Basestocks Deblend Model'
        },
        {
          itemId: this.uniqueId,
          path: '/PAO-pemand',
          name: 'PAO Demand Deblend Model'
        },
      ]
    },
    {
      id: this.uniqueId,
      title: 'Sustainability focused Basestocks',
      subtitle: '',
      list: [
        {
          itemId: this.uniqueId,
          path: '/bio-basestocks',
          name: 'Bio-Basestocks—Regulatory Environment and Changes'
        },
        {
          itemId: this.uniqueId,
          path: '/capacity-map',
          name: 'RRBO—Regulations, Capacity Map, and Material Balance'
        },
        {
          itemId: this.uniqueId,
          path: '/routes-to-decarbonization',
          name: 'Routes to Decarbonization'
        },
      ]
    },
     {
      id: this.uniqueId,
      title: 'Basestock Market Watch',
      subtitle: '',
      list: [
        {
          itemId: this.uniqueId,
          path: '/coverage-news-center',
          name: 'News Center'
        },
        {
          itemId: this.uniqueId,
          path: '/finished-lubricant',
          name: 'Finished Lubricant Blender Database'
        },
        {
          itemId: this.uniqueId,
          path: '/supplier-profiles',
          name: 'Supplier Profiles and Competitive Landscape'
        },
        {
          itemId: this.uniqueId,
          path: '/trade-and-basestocks',
          name: 'Always on Trade and Basestocks Production for Select Markets'
        },
        {
          itemId: this.uniqueId,
          path: 'product-properties',
          name: 'Product Properties and Specification Sheets'
        },
      ]
    },
  ]

  constructor() { }

  getTopPosition () {
    return this.scrollToValue
  }
}
