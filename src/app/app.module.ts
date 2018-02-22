import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProcessServiceService } from './process-service.service'
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ButtonsModule, TooltipModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import { StakeholderchartComponent } from './stakeholderchart/stakeholderchart.component';
import {Routes, RouterModule} from "@angular/router";
import {ChartModule} from "angular2-chartjs";
import { DatatableComponent } from './datatable/datatable.component';
import {DataTableModule} from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterQueryPipe } from './filter-query.pipe';
import { FilterTypePipe } from './filter-type.pipe';
import { FilterStakeholderPipe } from './filter-stakeholder.pipe';
import { OsmLocationComponent } from './osm-location/osm-location.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import { ProcessDetailsComponent } from './process-details/process-details.component';
import { LOCALE_ID } from '@angular/core';

const appRoutes: Routes = [
  { path: 'process', component: DatatableComponent },
  { path: 'stakeholder', component: StakeholderchartComponent },
  { path: 'location', component: OsmLocationComponent},
  { path: '',
    redirectTo: 'process',
    pathMatch: 'full'
  },
  { path: '**', component: DatatableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StakeholderchartComponent,
    DatatableComponent,
    FilterQueryPipe,
    FilterTypePipe,
    FilterStakeholderPipe,
    OsmLocationComponent,
    ProcessDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    ChartModule,
    DataTableModule,
    AngularOpenlayersModule,
    AngularMultiSelectModule
  ],
  providers: [ProcessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
