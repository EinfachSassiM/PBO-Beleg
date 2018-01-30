import { Component, OnInit } from '@angular/core';
import { ProcessServiceService } from '../process-service.service';
import { Network, DataSet, Node, Edge, IdType } from 'vis';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  result;

  nodes;
  edges;
  elements_nodes = [];
  elements_edges = [];


  constructor(private _dataService:ProcessServiceService) { }

  ngOnInit() {
    this._dataService.getProcessData()
      .subscribe(result =>{
        this.result = result;
        //console.log(this.data);
        this.result.process.childs.forEach((el) =>{
          let val_nodes = {id: el.id , label: el.name};
          let val_edges = {from: 1, to: el.id};
          this.elements_nodes.push(val_nodes);
          this.elements_edges.push(val_edges)
        });
        this.elements_nodes.push({id: 1 , label: "parent"});
        this.nodes = new DataSet(this.elements_nodes);
        this.edges = new DataSet(this.elements_edges);
        const container = document.getElementById('mynetwork');
        const data = {
          nodes: this.nodes,
          edges: this.edges
        };
        const options = {
          autoResize: true,
          height: '400px',
          width: '100%'
        };

        // initialize your network!
        let network = new Network(container, data, options);
        //console.log(this.elements);
      });



  }

}
