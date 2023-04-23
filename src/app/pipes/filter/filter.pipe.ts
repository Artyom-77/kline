import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return value;
    }

    return value.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
