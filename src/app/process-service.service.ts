import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProcessServiceService {

  url_ex:string = "http://141.56.131.7:5984/musterstadt/561fc59f9dcdde3b9bd540334a0005ca";
  url_local: string = "assets/data/process.json";

  constructor(private _http:HttpClient) { }


  getProcessData(){
    return this._http.get(this.url_local);
  }
}
