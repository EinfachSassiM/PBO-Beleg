import { Component, OnInit } from '@angular/core';
import {ProcessServiceService} from "../process-service.service";
import { MapBrowserEvent, Feature } from 'openlayers';

@Component({
  selector: 'app-osm-location',
  templateUrl: './osm-location.component.html',
  styleUrls: ['./osm-location.component.css']
})
export class OsmLocationComponent implements OnInit {
  result;
  locations = [];
  l_processes = [];
  currentLocation;
  current_proc;
  popupContent:{shown:boolean; feature};
  overview;

  constructor(private _processService:ProcessServiceService) {
    this.popupContent = {
      shown: true,
      feature: undefined
    };
  }

  ngOnInit() {
    this._processService.getProcessData()
      .subscribe(result => {
        this.result = result;
        this.result.process.locations.forEach((loc)=>{
          this.locations.push({"id": loc.id,"city": loc.city, "lat": parseFloat(loc["geoCoords (optional)"].lat), "lng": parseFloat(loc["geoCoords (optional)"].lng)});
        });
        console.log(this.locations);
      });
  }

  public onClick (event: MapBrowserEvent) {
    event.map.forEachFeatureAtPixel(event.pixel, (feature: Feature) => {
      let featureId: number|string;

      featureId = feature.getId();
      this.setPopupContent(this.locations[featureId]);
    });
  }
  public setPopupContent(feature) {
    this.popupContent.shown = true;
    this.popupContent.feature = feature;
  }

  showDetails(location){
    console.log(location);
    this.current_proc = null;
    this.l_processes = [];
    this.currentLocation = location;
    this.result.process.childs.forEach((child)=>{
      if(child.location == location.id){
        this.l_processes.push(child);
      }
    });
    setTimeout(()=>{
      this.overview = document.getElementById("overview_osm");
      this.overview.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 0);
    this.current_proc = this.l_processes[0];
  }

  selectProcess(proc){
    this.current_proc = proc;
  }

}
