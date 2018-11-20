import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../../data.service'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  datas:any[];
  player:any[];
  name:string;
  id:string;
  constructor(private data:DataService,private router:Router) { }

  ngOnInit() {


  }

  

}
