import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { user } from '../../../User';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:string;
  users:user;

  constructor(
    private data:DataService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.data.QueryGet(this.id).subscribe(user => {
      this.users = user;
    });
  }
  update(id,firstname,lastname,user,email,password){
    let newUser = {
      firstname : firstname,
      lastname : lastname,
      user : user ,
      email : email ,
      password : password
    }
    this.data.UpdateUser(id,newUser).subscribe(res => {
      console.log(res);
      this.router.navigate(['admin/dashboard'])
    })
  }


}
