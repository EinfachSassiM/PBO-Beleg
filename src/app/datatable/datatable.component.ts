import { Component, OnInit } from '@angular/core';
import {ProcessServiceService} from "../process-service.service";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  result;
  data;

  sortBy = "start";
  sortOrder = "asc";

  filterQuery:string = "";

  /** Stakeholder Settings **/
  sh_nameList = [];
  sh_itemList = [];
  sh_selectedItems = [];
  sh_multi_settings = {
    text: "Stakeholder auswählen",
    selectAllText: 'Alle auswählen',
    unSelectAllText: 'Nichts auswählen',
    badgeShowLimit: 3,
    classes: "myclass custom-class"
  };
  show_shFilter:boolean = false;
  currentDatetime;

  /** Typ auswählen **/
  type_itemList = [
    {"id":1,"itemName":"< Erschaffung", "itemSymbol":"<"},
    {"id":2,"itemName":"> Entscheidung", "itemSymbol":">"},
    {"id":3,"itemName":"= Anfrage", "itemSymbol":"="}
  ];
  type_selectedItems = [
    {"id":1,"itemName":"< Erschaffung", "itemSymbol":"<"},
    {"id":2,"itemName":"> Entscheidung", "itemSymbol":">"},
    {"id":3,"itemName":"= Anfrage", "itemSymbol":"="}
  ];
  type_multi_settings = {
    text: "Typ auswählen",
    selectAllText: 'Alle auswählen',
    unSelectAllText: 'Nichts auswählen',
    badgeShowLimit: 3,
    classes: "myclass custom-class-example"
  };

  constructor(private _processService:ProcessServiceService) { }

  ngOnInit() {
    this._processService.getProcessData()
      .subscribe(result =>{
        this.result = result;
        this.data = this.result.process.childs;
        this.data.forEach((el)=>{
          this.result.process.stakeholder.forEach((sh, index)=>{
            if(el.initiator == sh.id){
              el.initiator = sh.name;
            if(this.sh_nameList.indexOf(sh.name) == -1){
                let tmp_sh = {"id": index, "itemName": sh.name};
                this.sh_nameList.push(sh.name);
                this.sh_itemList.push(tmp_sh);
                this.sh_selectedItems.push(tmp_sh);
              }
            }
          });
        });
        this.currentDatetime = new Date();
      this.show_shFilter = true;
      //console.log(this.sh_itemList);
      });
  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.type_selectedItems);
    this.currentDatetime = new Date();
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.type_selectedItems);
    this.currentDatetime = new Date();
  }
  onSelectAll(items: any){
    console.log(items);
    this.currentDatetime = new Date();
  }
  onDeSelectAll(items: any){
    console.log(items);
    this.currentDatetime = new Date();
  }

}
