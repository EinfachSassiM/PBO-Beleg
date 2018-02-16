import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProcessServiceService } from './process-service.service'
import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GanttchartComponent } from './ganttchart/ganttchart.component';
import {GanttModule} from "gantt-ui-component";
import {ButtonsModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import { StakeholderchartComponent } from './stakeholderchart/stakeholderchart.component';
import {Routes, RouterModule} from "@angular/router";
import {ChartModule} from "angular2-chartjs";

const appRoutes: Routes = [
  { path: 'process', component: GanttchartComponent },
  { path: 'stakeholder', component: StakeholderchartComponent },
  { path: '',
    redirectTo: 'process',
    pathMatch: 'full'
  },
  { path: '**', component: GanttchartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    NavigationComponent,
    GanttchartComponent,
    StakeholderchartComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    GanttModule.forRoot(),
    ChartModule
  ],
  providers: [ProcessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
