import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ProcessServiceService} from "../process-service.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-stakeholderchart',
  templateUrl: 'stakeholderchart.component.html',
  styleUrls: ['stakeholderchart.component.css']
})
export class StakeholderchartComponent implements OnInit {

  overview;

  open_sh:boolean = true;
  open_p:boolean = false;

  result;
  stakeholder:number;
  showBar:boolean = false;
  count:number;
  count_participants:number;

  current_stakeholder;
  current_sh_process = [];
  current_p_process = [];
  current_proc;
  current_loc;
  current_initiator;
  current_participants = [];

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
      text: 'Anzahl der Prozesse je Stakeholder (Klick auf Balken zeigt Prozessdatenblatt)'
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
    autoSkip: false,
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

          /** stakeholder **/
          this.data.datasets[0].data.push(this.count);
          this.data.datasets[1].data.push(this.count_participants);

          this.showBar = true;
        });
      });
  }

  resetData(){
    this.current_stakeholder = null;
    this.current_proc = null;
    this.current_sh_process = [];
    this.current_p_process = [];
    this.current_loc = null;
    this.current_initiator = null;
    this.current_participants = [];
  }

  loadData(name:string){
    this.resetData();
    this.result.process.stakeholder.forEach((sth)=>{
      if(sth.name == name){
        this.current_stakeholder = sth;
      }
    });
    this.result.process.childs.forEach((child)=>{
      if(child.initiator == this.current_stakeholder.id){
        this.current_sh_process.push(child);
      }
      if (child.participants.includes(this.current_stakeholder.id)) {
        this.current_p_process.push(child);
      }
    });
    setTimeout(()=>{
      this.overview = document.getElementById("overview");
      this.overview.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 0);
    this.selectProcess(this.current_sh_process[0]);
  }

  selectProcess(proc){
    this.current_initiator = undefined;
    this.current_participants = [];
    this.current_loc = undefined;
    this.current_proc = proc;
    this.result.process.locations.forEach((loc)=>{
      if(this.current_proc.location.includes(loc.id)){
        this.current_loc =  loc.city;
      }else{
      }
    });
    this.result.process.stakeholder.forEach((sh)=>{
      if(this.current_proc.initiator == sh.id){
        this.current_initiator = sh.name;
      }
    });
    this.current_proc.participants.forEach((el)=>{
      this.result.process.stakeholder.forEach((sh)=>{
        if(el == sh.id){
          this.current_participants.push(sh);
        }
      });
    });
  }

  openPDF(url:string){
    window.open(url);
    return false;
  }

}

