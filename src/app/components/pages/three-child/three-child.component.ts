import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../services/data-sharing.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-three-child',
  templateUrl: './three-child.component.html',
  styleUrls: ['./three-child.component.css']
})
export class ThreeChildComponent implements OnInit {

  constructor(private dataSharingService:DataSharingService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
    let somemodel = form.value.somemodel;
    this.dataSharingService.somemodel = somemodel;
    this.router.navigate(['/three/two']);
  }

}
