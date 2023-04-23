import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectDate',
})
export class SelectDatePipe implements PipeTransform {
  transform(items: any[], selectedOption: any): any[] {
    if (!items || !selectedOption || selectedOption === 'All') {
      return items;
    }
    const filteredItems = items.filter((item) =>
      item.date.includes(selectedOption)
    );
    return filteredItems;
  }
}
