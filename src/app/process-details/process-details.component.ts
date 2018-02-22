import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.css']
})
export class ProcessDetailsComponent implements OnInit, OnChanges {

  @Input() public current_p;
  @Input() public current_l;
  @Input() public result;

  current_initiator;
  current_participants = [];

  constructor() { }

  getCurrentData(){
    this.current_initiator = "";
    this.current_participants = [];
    this.result.process.stakeholder.forEach((sh)=>{
      if(this.current_p.initiator == sh.id){
        this.current_initiator = sh.name;
      }
    });
    this.current_p.participants.forEach((el)=>{
      this.result.process.stakeholder.forEach((sh)=>{
        if(el == sh.id){
          this.current_participants.push(sh);
        }
      });
    });
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.getCurrentData();
  }

  openPDF(url:string){
    window.open(url);
    return false;
  }

}
