import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-multhard',
  templateUrl: './multhard.component.html',
  styleUrls: ['./multhard.component.scss'],
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
export class MulthardComponent implements OnInit {
  in:number=0;lvl:number;id:string;idlevel:any;
  message:string=null;
  num:number[]=[6,9,12,2,5,9,3,4,5,4,5,2,6,7,10,0];
  num2:any[]=[6,9,12,2,5,9,3,4,5,4,5,2,6,7,10,0];
  op:Object[]=[
    {
      stat:"5 × X = 25",
      result:5
    },
    {
      stat:"4 × X = 16",
      result:4
    },
    {
      stat:"6 × X = 36",
      result:6
    },
    {
      stat:"9 × X = 81",
      result:9
    },
    {
      stat:"3 × X = 36",
      result:12
    },
    {
      stat:"18 × X = 36",
      result:2
    },
    {
      stat:" 6 × X = 30",
      result:5
    },
    {
      stat:"8 × X = 80",
      result:10
    },
    {
      stat:"14 × X = 0",
      result:0
    },
    {
      stat:"16 × X = 48",
      result:3
    },
    {
      stat:"9 × X = 36",
      result:4
    },
    {
      stat:"15 × X = 75",
      result:5
    },
    {
      stat:"13 × X = 26",
      result:2
    },
    {
      stat:"7 × X = 42",
      result:6
    },
    {
      stat:"6 × X = 54",
      result:9
    },
    {
      stat:"11 × X = 77",
      result:7
    },
  ];
  constructor(private router:Router,private data:DataService,private activatedRoute:ActivatedRoute) { }

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
        this.num=null;
        if(this.lvl <= 6)
        {this.lvl++;}
        else{
        this.lvl =1;
        }

        //update level of player
        this.data.UpdateLevel(this.id,this.lvl).subscribe(res => {
          console.log(res);
        })
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
