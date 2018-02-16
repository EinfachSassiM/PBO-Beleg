import { Component } from '@angular/core';
import { ProcessServiceService } from './process-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  radioModel: string = 'Process';
}
