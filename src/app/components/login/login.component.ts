import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  lemail:string='';
  lpassword:string='';
  Rfirstname:string='';
  Rlastname:string='';
  Rusername:string='';
  Remail:string='';
  Rpassword:string='';
  id:string;

  constructor(private data:DataService,private router:Router,private param:ActivatedRoute) { }

  ngOnInit() {
  }
  //login
  Login(){
    
      var email=this.lemail;
      var password=this.lpassword;
      this.data.getUserByEmailPassword(email,password).subscribe(user => {
        if(user.length >0){

            this.id = user[0]['_id']
            console.log(this.id)
            this.router.navigate(['/game/'+this.id]);
          
        }
      
    })
  }
  
  public get Id() : string {
    return this.id
  }
  
  //Registre new player
  Registre(){
    var newUser ={
      firstname: this.Rfirstname,
      lastname: this.Rlastname,
      username:this.Rusername,
      email:this.Remail,
      password:this.Rpassword,
    }
    this.data.insertUser(newUser).subscribe(res => {
      console.log(res);
    });
  }
}
