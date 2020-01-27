import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../services/data-sharing.service';


@Component({
  selector: 'app-three-child-two',
  templateUrl: './three-child-two.component.html',
  styleUrls: ['./three-child-two.component.css']
})
export class ThreeChildTwoComponent implements OnInit {
   somemodel:string;
  constructor(private dataSharingService:DataSharingService) {
    
   }

  ngOnInit() {
    console.log("initializing");
    this.somemodel=this.dataSharingService.somemodel;
  }

}
