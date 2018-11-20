import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-addhard',
  templateUrl: './addhard.component.html',
  styleUrls: ['./addhard.component.scss'],
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
export class AddhardComponent implements OnInit {
  in:number=0;lvl:number;id:string;idlevel:any;
  message:string=null;next=false;
  num:Array<number>=[12,2,5,9,24,6,23,14,7,15,17,10,13,29,15,8];
  num2:any[]=[12,2,5,9,24,6,23,14,7,15,17,10,13,29,15,8];
  op:Object[]=[
    {
      stat:"5+X = 10",
      result:5
    },
    {
      stat:"10+X = 12",
      result:2
    },
    {
      stat:"2+X = 14",
      result:12
    },
    {
      stat:"1+X = 10",
      result:9
    },
    {
      stat:"3+X = 20",
      result:17
    },
    {
      stat:"8+X = 16",
      result:8
    },
    {
      stat:"9+X = 24",
      result:15
    },
    {
      stat:"5+X = 18",
      result:13
    },
    {
      stat:"33+X = 40",
      result:7
    },
    {
      stat:"17+X = 27",
      result:10
    },
    {
      stat:"25+X = 31",
      result:6
    },
    {
      stat:"5+X= 28",
      result:23
    },
    {
      stat:"15+X = 39",
      result:24
    },
    {
      stat:"5+X = 20",
      result:15
    },
    {
      stat:"4+X = 18",
      result:14
    },
    {
      stat:"8+X = 37",
      result:29
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
  //methode to pop buttons
  pop(l){
    if(this.in<this.op.length){
      if(this.num.length<=1){
        this.message = "Congratulations";
        this.next = true;
        this.num=null;
        if(this.lvl < 3)
        {this.lvl = 3;
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
