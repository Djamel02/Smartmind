import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter',style({ opacity:0 }), {optional:true}),

        query(':enter',stagger('300ms',[
          animate('1s ease-in',keyframes([
            style({ opacity : 0 , transform:'translateY(-75px)', offset:0}),
            style({ opacity : .5 , transform:'translateY(35px)', offset:0.3}),
            style({ opacity : 1 , transform:'translateY(0)', offset:1}),
          ]))
        ]),{optional:true}),
        query(':leave',stagger('300ms',[
          animate('1s ease-in',keyframes([
            style({ opacity : 1 , transform:'translateY(0)', offset:0}),
            style({ opacity : .5 , transform:'translateY(35px)', offset:0.3}),
            style({ opacity : 0 , transform:'translateY(-75px)', offset:1})
          ]))
        ]),{optional:true})
      ])
    ])
  ]
})

export class AdditionComponent implements OnInit {
  in:number=0;lvl:number;id:string;idlevel:string;
  message:string=null;next=false;
  num:Array<number>=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  num2:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  op:Object[]=[
    {
      stat:"1+2",
      result:3
    },
    {
      stat:"0+2",
      result:2
    },
    {
      stat:"2+2",
      result:4
    },
    {
      stat:"1+0",
      result:1
    },
    {
      stat:"5+6",
      result:11
    },
    {
      stat:"8+8",
      result:16
    },
    {
      stat:"9+6",
      result:15
    },
    {
      stat:"5+8",
      result:13
    },
    {
      stat:"3+6",
      result:9
    },
    {
      stat:"7+5",
      result:12
    },
    {
      stat:"2+4",
      result:6
    },
    {
      stat:"5+2",
      result:7
    },
    {
      stat:"0+5",
      result:5
    },
    {
      stat:"5+5",
      result:10
    },
    {
      stat:"4+4",
      result:8
    },
    {
      stat:"8+6",
      result:14
    },
  ];
  constructor(private router:Router,private data:DataService,private activatedRoute:ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute= function (){
      return false;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
        //  window.scrollTo(0, 0);
      }
    });
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.data.QueryGet(this.id).subscribe(user => {
        this.lvl = user[0]['level'];
      });
      // this.data.getLevel().subscribe(res => {
      //   for (var lvl of res) {
      //       //Relation between numlevel and id_level
      //       if(lvl["_id"] == this.lvl){
      //         this.lvl = lvl['numlevel']  
      //       }
      //   }
      // })
  }
  //methode to pop buttons
  pop(l){
    if(this.in<this.op.length){
      if(this.num.length<=1){
        this.message = "Congratulations";
        this.next = true;
        this.num=null;
        if(this.lvl < 2){
          this.lvl=2;
          var le = {
            lvl:this.lvl
          }
          // this.data.getLevel().subscribe(res => {
          //   for (var lvl of res) {
          //       //Relation between numlevel and id_level
          //       if(lvl["numlevel"] == this.lvl){
          //         this.idlevel = lvl['_id']  
          //       }
          //   }
          // });
          //update level of player
          this.data.UpdateLevel(this.id,le).subscribe(res => {
            console.log(res);
          })
        }
        
      }
      else{
        for(var s =0;s<this.num.length;s++){
        if(s==l && this.num[l]==this.op[this.in]['result']){
          this.num.splice(s,1);
        }
        else{
          this.num = this.num2;
        }
      }
      this.in++;
      }
    }
    else{
      this.message = "Sorry you lost";
    }
      
    
  }
}
