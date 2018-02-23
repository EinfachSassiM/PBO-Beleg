import { Component, OnInit } from '@angular/core';
import {ProcessServiceService} from "../process-service.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  process;

  constructor(private _dataService:ProcessServiceService) { }

  ngOnInit() {
    this._dataService.getProcessData()
      .subscribe((data)=>{
      this.process = data;
      });
  }

}
