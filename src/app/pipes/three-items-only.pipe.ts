import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeItemsOnly'
})
export class ThreeItemsOnlyPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items ) {
      return items;
    }
    const filteredItems = items.filter(
      (item, index) => index < 3
    );

    return filteredItems;
  }

}
