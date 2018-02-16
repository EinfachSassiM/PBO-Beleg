import { Component, OnInit } from '@angular/core';
import {ProcessServiceService} from "../process-service.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-stakeholderchart',
  templateUrl: 'stakeholderchart.component.html',
  styleUrls: ['stakeholderchart.component.css']
})
export class StakeholderchartComponent implements OnInit {

  result;
  stakeholder:number;
  showBar:boolean = false;
  count:number;
  count_participants:number;

  current_stakeholder;
  current_processes = [];
  current_proc;

  type = 'bar';
  data = {
    labels: [],
    datasets: [
      {
        label: "Als Stakeholder",
        data: [],
        backgroundColor: "rgb(244, 163, 65)"
      },
      {
        label: "Als Teilnehmer",
        data: [],
        backgroundColor: "rgb(66, 134, 244)"
      }
    ]
  };

  options = {
    responsive: true,
    color: "blue",
    events: ['click', 'mousemove'],
    title:{
      display: true,
      text: 'Anzahl der Prozesse pro Stakeholder'
    },
    legend:{
      display: true,
      position: "top"
    },
    onClick: (event,array)=>{
      //console.log(array[0]._model.label);
      if(array[0]){
        this.loadData(array[0]._view.label);
      }
    },
    //maintainAspectRatio: false,
    xAxes: [{
      ticks: {
        stepSize: 1,
        min: 0,
        autoSkip: false
      }
    }]
  };

  constructor(private _processService:ProcessServiceService) { }

  ngOnInit() {
    this._processService.getProcessData()
      .subscribe(result => {
        this.result = result;
        this.result.process.stakeholder.forEach((sh, index) => {
          this.stakeholder = index;

          /** labels **/
          this.data.labels.push(sh.name);

          /** stakeholder, participants - count **/
          this.count = 0;
          this.count_participants = 0;
          this.result.process.childs.forEach((el) => {
            if (sh.id == el.initiator) {
              this.count++;
            }
            if (el.participants.includes(sh.id)) {
              this.count_participants++;
            }
          });

          console.log(this.count_participants);

          /** stakeholder **/
          this.data.datasets[0].data.push(this.count);
          this.data.datasets[1].data.push(this.count_participants);

          this.showBar = true;
        });
      });
  }

  loadData(name:string){
    this.current_stakeholder = null;
    this.current_proc = null;
    this.current_processes = [];
    this.result.process.stakeholder.forEach((sth)=>{
      if(sth.name == name){
        this.current_stakeholder = sth;
      }
    });
    this.result.process.childs.forEach((child)=>{
      if(child.initiator == this.current_stakeholder.id){
        this.current_processes.push(child);
      }
    });
    console.log(this.current_stakeholder);
    console.log(this.current_processes);
  }

  selectProcess(proc){
    this.current_proc = proc;
  }

  getLocation(id:string){
    this.result.process.locations.forEach((loc)=>{
      if(loc.id = id){
        return loc.city;
      }else{
        return null;
      }
    });
  }

}

