import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-substition',
  templateUrl: './substition.component.html',
  styleUrls: ['./substition.component.scss'],
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
export class SubstitionComponent implements OnInit {
  in:number=0;lvl:number;id:string;idlevel:any;
  message:string=null;next=false;
  num:number[]=[1,1,0,3,1,2,0,3,2,5,0,5,9,2,3,1];
  num2:any[]=[1,1,0,3,1,2,0,3,2,5,0,5,9,2,3,1];
  op:Object[]=[
    {
      stat:"2-1",
      result:1
    },
    {
      stat:"2-0",
      result:2
    },
    {
      stat:"2-2",
      result:0
    },
    {
      stat:"1-0",
      result:1
    },
    {
      stat:"6-5",
      result:1
    },
    {
      stat:"8-8",
      result:0
    },
    {
      stat:"9-6",
      result:3
    },
    {
      stat:"8-5",
      result:3
    },
    {
      stat:"6-4",
      result:2
    },
    {
      stat:"7-5",
      result:2
    },
    {
      stat:"9-6",
      result:3
    },
    {
      stat:"5-4",
      result:1
    },
    {
      stat:"5-0",
      result:5
    },
    {
      stat:"5-5",
      result:0
    },
    {
      stat:"11-6",
      result:5
    },
    {
      stat:"13-4",
      result:9
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
  }
  pop(l){
    if(this.in<this.op.length){
      if(this.num.length<=1){
        this.message = "Congratulations";
        this.next = true;
        this.num=null;
        if(this.lvl < 4)
        {this.lvl = 4;
          console.log(this.lvl);
        //update level of player
        this.data.UpdateLevel(this.id,this.lvl).subscribe(res => {
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
