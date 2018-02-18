import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.css']
})
export class ProcessDetailsComponent implements OnInit {

  @Input() public current_p;
  @Input() public current_l;
  @Input() public result;

  current_initiator;
  current_participants = [];

  constructor() { }

  ngOnInit() {

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

}
