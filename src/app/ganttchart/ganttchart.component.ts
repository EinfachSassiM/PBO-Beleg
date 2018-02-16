import { Component, OnInit } from '@angular/core';
import {GanttComponent, GanttConfiguration, GanttTaskItem, GanttTaskLink,GanttEvents} from "gantt-ui-component";
import { ProcessServiceService } from '../process-service.service';

@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css']
})
export class GanttchartComponent implements OnInit {

  result;
  gantt:boolean = false;

  tasks = [
  /*{id: 1, title: "Prozess1", start_date: "2017-06-15", end_date: "2017-07-03", progress: 1.0},
  {id: 2, title: "Prozess2", start_date: "2017-06-04 00:00", end_date: "2017-07-03", progress: 1.0},
  {id: 3, title: "Prozess3", start_date: "2017-07-03 00:00", end_date: "2017-12-03", progress: 1.0},
  {id: 4, title: "Prozess4", start_date: "2017-06-15 00:00", end_date: "2017-07-03", progress: 1.0},
  {id: 5, title: "Prozess5", start_date: "2017-06-15 00:00", end_date: "2017-07-03", progress: 1.0},*/

];

  gantt_configuration: GanttConfiguration = {
  chartTitle: "Prozessübersicht",
  heading_label: "Prozess",
  details_on_dblclick: false,
  enable_custom_new_task: false,
  readonly: true,
  show_grid: false,
  show_chart:true,
  date_scale: "%Y",
  grid_columns: ["title", "start_date", "end_date"],
  fit_tasks: true,
  scale_unit: "year",
  row_height: 20,
  grid_width:0.5,
  step:{ hour:24, day: 1, week: 1, month:2, year:0.5},
  controls: {hour:false, day:true, week:true, month:true, year:true }
};

  constructor(private _processService:ProcessServiceService) {

  }

  ngOnInit() {
    this._processService.getProcessData()
      .subscribe(result =>{
        this.result = result;
        //console.log(this.data);
        this.result.process.childs.forEach((el) =>{
          let val_nodes = {id: el.id , title: el.name, start_date: el.start.substring(0,10), end_date: el["end (optional)"].substring(0,10), progress: 1.0};
          this.tasks.push(val_nodes);
        });
        this.gantt = true;
        console.log(this.tasks);
      });
  }

  taskSelected($event){
    console.log("Ich bin hier");
  }

}
