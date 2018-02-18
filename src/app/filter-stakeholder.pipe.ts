import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStakeholder'
})
export class FilterStakeholderPipe implements PipeTransform {

  tmp_count:number=0;

  transform(array: any[], activeType: any[]): any {
    console.log("Es wird gefiltert");
    if (activeType) {
      console.log(activeType);
      //return array.filter(row=>row.transformation.type == this.contains(activeType, row));
      return array.filter(row => this.contains(activeType, row));
      //return array;
    }
    return null;
  }

  contains(array,row){

    array.forEach((el)=>{
      if(el.itemName == row.initiator){
        //console.log(el.itemSymbol);
        //return el.itemSymbol;
        //return true;
        this.tmp_count++;
      }
    });
    if(this.tmp_count > 0){
      console.log("true: " + row.initiator);
      this.tmp_count = 0;
      return true;
    }else{
      console.log("false: " + row.initiator);
      this.tmp_count = 0;
      return false;
    }
  }

}
