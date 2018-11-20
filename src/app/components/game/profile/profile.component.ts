import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id:string;
  firstname:string;
  lastname:string;
  lvl:string
  level:number;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private data:DataService) { }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id!=null){
      this.data.QueryGet(this.id).subscribe(user => {
        this.firstname = user[0]['firstname'];
        this.lastname = user[0]['lastname'];
        this.level = user[0]['level'];
      });
    }else{
      this.router.navigate(['/login']);
    }
  }
  

}
