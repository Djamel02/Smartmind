import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { user } from '../../../User';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   users:user[];
   NbrUsers:number;
   toplevel:any;
   bplayer:string;
  constructor(private data:DataService) {
   }

  ngOnInit() {
    //fetch all users
    this.data.getUsers().subscribe(res =>{
       this.users = res;
       this.NbrUsers = res.length;
       this.toplevel = res[0]["level"]
       for (var i:number = 0; i < res.length; i++) {
         if(res[i]["level"] < res[i+1]["level"]){
           this.toplevel = res[i+1]["level"];
          this.bplayer = res[i+1]["firstname"]+" "+res[i+1]["lastname"]
         }
       }
       
      });
    //fetch levels

  }

  //delete users
  delUser(id:any){
    var users =this.users;
    this.data.deleteUser(id).subscribe(data => {
      for(var i =0;i<users.length;i++){
        if(users[i]._id==id){
          users.splice(i,1);
          console.log(id);
        }
      }
    });
  }


  

}
