import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  radioModel: string;
  urlsplit = [];

  constructor(){
    this.urlsplit = window.location.href.split("/");
    if(this.urlsplit[this.urlsplit.length -1] == ""){
      this.radioModel = "process"
    }else{
      this.radioModel = this.urlsplit[this.urlsplit.length -1];
    }
  }

}
