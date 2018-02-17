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

  constructor(private location:Location){
    this.radioModel = location.path().slice(1);
  }

}
