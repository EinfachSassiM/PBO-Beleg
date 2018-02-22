import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  tmp_count:number=0;

  transform(array: any[], activeType: any[]): any {
    if (activeType) {
      return array.filter(row => this.contains(activeType, row));
    }
    return null;
  }

  contains(array,row){

    array.forEach((el)=>{
      if(el.itemSymbol == row.transformation.type){
        this.tmp_count++;
      }
    });
    if(this.tmp_count > 0){
      this.tmp_count = 0;
      return true;
    }else{
      this.tmp_count = 0;
      return false;
    }
  }



}
