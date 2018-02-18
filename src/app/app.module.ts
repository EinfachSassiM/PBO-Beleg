import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProcessServiceService } from './process-service.service'
import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GanttchartComponent } from './ganttchart/ganttchart.component';
import {GanttModule} from "gantt-ui-component";
import {ButtonsModule, TooltipModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import { StakeholderchartComponent } from './stakeholderchart/stakeholderchart.component';
import {Routes, RouterModule} from "@angular/router";
import {ChartModule} from "angular2-chartjs";
import { DatatableComponent } from './datatable/datatable.component';
import {DataTableModule} from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterQuery } from './filter-query.pipe';
import { FilterTypePipe } from './filter-type.pipe';
import { FilterStakeholderPipe } from './filter-stakeholder.pipe';

const appRoutes: Routes = [
  { path: 'process', component: DatatableComponent },
  { path: 'stakeholder', component: StakeholderchartComponent },
  { path: 'location', component: DatatableComponent},
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
    StakeholderchartComponent,
    DatatableComponent,
    FilterQuery,
    FilterTypePipe,
    FilterStakeholderPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    GanttModule.forRoot(),
    ChartModule,
    DataTableModule,
    AngularMultiSelectModule
  ],
  providers: [ProcessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
