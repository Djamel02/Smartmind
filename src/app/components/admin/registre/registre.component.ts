import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { user } from '../../../User';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
    firstname:string='';
    lastname:string='';
    username:string='';
    email:string='';
    password:string='';
    type:string;
  
  constructor(private data:DataService,public router:Router) { }

  ngOnInit() {
  }
  registre(){
    var newUser ={
      firstname: this.firstname,
      lastname: this.lastname,
      username:this.username,
      email:this.email,
      password:this.password,
      type:this.type.valueOf()
    }
    if(newUser.type == "Player"){
      this.data.insertUser(newUser).subscribe(res => {
        console.log(res);
        this.router.navigate(['admin/dashboard'])
      });
    }
    else if(newUser.type == "Admin"){
      this.data.insertAdmin(newUser).subscribe(res => {
        console.log(res);
        this.router.navigate(['admin/dashboard'])
      })
    }
  }
}
