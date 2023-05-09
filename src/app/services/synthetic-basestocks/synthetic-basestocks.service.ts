import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SyntheticBasestocksService {
  public modalData: any[] = [
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '50/90',
      "Composition": 0
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '100/130',
      "Composition": 1
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '150',
      "Composition": 1.300
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '50/90',
      "Composition": 0
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '100/130',
      "Composition": 1
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '150',
      "Composition": 1.300
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '50/90',
      "Composition": 0
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '100/130',
      "Composition": 1
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '150',
      "Composition": 1.300
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '50/90',
      "Composition": 0
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '100/130',
      "Composition": 1
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '150',
      "Composition": 1.300
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '50/90',
      "Composition": 0
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '100/130',
      "Composition": 1
    },
    {
      id: uuidv4(),
      "Basestock Group": 'Paraffinic Group I',
      "Basestock": '150',
      "Composition": 1.300
    },

  ];
  constructor() {}
}
