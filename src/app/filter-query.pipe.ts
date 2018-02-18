import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class FilterQueryPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter(row=>row.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
    return array;
  }

}
