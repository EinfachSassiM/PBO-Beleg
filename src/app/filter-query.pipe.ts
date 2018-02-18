import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class FilterQuery implements PipeTransform {

  transform(array: any[], query: string): any {
    console.log("Es wird gefiltert");
    if (query) {
      return array.filter(row=>row.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
    return array;
  }

}
