import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Login1Component implements OnInit {
  lemail:string='';
  lpassword:string='';
  id:string;

  constructor(private data:DataService,private router:Router,private param:ActivatedRoute) { }

  ngOnInit() {
  }
//login
Login(){
    
  var email=this.lemail;
  var password=this.lpassword;
  
  this.data.getAdminByEmailPassword(email,password).subscribe(user => {
    if(user.length >0){

        this.id = user[0]['_id']
        console.log(this.id)
        this.router.navigate(['/admin/dashboard']);
      
    }
  
})
}
}
