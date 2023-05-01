import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyntheticBasestocksService {

  public list: any[] = [
    {
      segment: 'CONSUMER AUTOMOTIVE',

      type: 'lubricdant d',
      typeItem: 'col item 1',
      amount: 1
    },
     {
      segment: 'CONSUMER AUTOMOTIVE',
      type: 'lubricdant d',
      typeItem: 'col item 2',
      amount: 1
    },
     {
      segment: 'CONSUMER AUTOMOTIVE',
      type: 'lubricdant d',
      typeItem: 'col item 2',
      amount: 1
    },
    {
      segment: 'COMMERCIAL AUTOMOTIVE',
      type: 'lubricdant d',
      typeItem: 'col item 2',
      amount: 2
    },
    {
      segment: 'COMMERCIAL AUTOMOTIVE',
      type: 'lubricdant d',
      typeItem: 'col item 1',
      amount: 10
    },
    {
      segment: 'INDUSTRIAL OILS AND FLUIDS',
      type: 'lubricdant x',
      typeItem: 'col item 3',
      amount: 3
    },
    {
      segment: 'CONSUMER AUTOMOTIVE',
      type: 'lubricdant d',
      typeItem: 'col item 1',
      amount: 4
    },
    {
      segment: 'COMMERCIAL AUTOMOTIVE',
      type: 'lubricdant b',
      typeItem: 'col item 2',
      amount: 5
    },
    {
      segment: 'INDUSTRIAL OILS AND FLUIDS',
      type: 'lubricdant x',
      typeItem: 'col item 3',
      amount: 6
    },
  ];

  constructor() { }
  getSales() {
    return this.list;
  }
}
