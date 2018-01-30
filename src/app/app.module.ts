import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProcessServiceService } from './process-service.service'
import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProcessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
