import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectCountry'
})
export class SelectCountryPipe implements PipeTransform {

  transform(items: any[], selectedOption: any): any[] {
    if (!items || !selectedOption || selectedOption === 'All') {
      return items;
    }
    const filteredItems = items.filter(
      (item) => item.regions === selectedOption
    );

    return filteredItems;
  }

}
