import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { DataService } from '../../../data.service';
@Component({
  selector: 'app-subhard',
  templateUrl: './subhard.component.html',
  styleUrls: ['./subhard.component.scss'],
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
export class SubhardComponent implements OnInit {
  in:number=0;lvl:number;id:string;idlevel:any;
  message:string=null;next=false;
  num:number[]=[7,7,9,5,6,2,5,12,0,5,10,13,16,10,8,11];
  num2:any[]=[7,7,9,5,6,2,5,12,0,5,10,13,16,10,8,11];
  op:Object[]=[
    {
      stat:"10-X = 5",
      result:5
    },
    {
      stat:"9-X = 3",
      result:6
    },
    {
      stat:"12-X = 10",
      result:2
    },
    {
      stat:"15-X = 8",
      result:7
    },
    {
      stat:"19-X = 3",
      result:16
    },
    {
      stat:"18-X = 8",
      result:10
    },
    {
      stat:" 11-X = 3",
      result:8
    },
    {
      stat:"8-X =1",
      result:7
    },
    {
      stat:"14-X = 5",
      result:9
    },
    {
      stat:"16-X = 11",
      result:5
    },
    {
      stat:"17-X = 5",
      result:12
    },
    {
      stat:"20-X = 20",
      result:0
    },
    {
      stat:"13-X = 8",
      result:5
    },
    {
      stat:"11-X = 1",
      result:10
    },
    {
      stat:"19-X = 6",
      result:13
    },
    {
      stat:"14-X = 3",
      result:11
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
