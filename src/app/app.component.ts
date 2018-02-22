import { Component } from '@angular/core';
import { ProcessServiceService } from './process-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  radioModel: string;
  urlsplit = [];
  constructor(/*private location:Location*/){
    //this.radioModel = location.path().slice(1);
    this.urlsplit = window.location.pathname.split("/");
    console.log(window.location.pathname);
    this.radioModel = this.urlsplit[this.urlsplit.length -1];
    console.log(this.urlsplit[this.urlsplit.length -1]);
  }

}
