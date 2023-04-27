import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter',
})
export class SelectFilterPipe implements PipeTransform {
  transform(items: any[], selectedOption: any): any[] {
    if (!items || !selectedOption || selectedOption === 'All') {
      return items;
    }
    const filteredItems = items.filter(
      (item) => item.industry === selectedOption
    );

    return filteredItems;
  }
}
