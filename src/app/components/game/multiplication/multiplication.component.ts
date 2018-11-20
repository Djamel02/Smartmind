import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss'],
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
export class MultiplicationComponent implements OnInit {
  in:number=0;
  message:string=null;
  num:Array<number>=[48,16,25,4,10,0,8,0,35,40,18,0,54,30,64,2];
  num2:any[]=[48,16,25,4,10,0,8,0,35,40,18,0,54,30,64,2];
  op:Object[]=[
    {
      stat:"1×2",
      result:2
    },
    {
      stat:"0×2",
      result:0
    },
    {
      stat:"2×2",
      result:4
    },
    {
      stat:"1×0",
      result:0
    },
    {
      stat:"5×6",
      result:30
    },
    {
      stat:"8×8",
      result:64
    },
    {
      stat:"9×6",
      result:54
    },
    {
      stat:"5×8",
      result:40
    },
    {
      stat:"3×6",
      result:18
    },
    {
      stat:"7×5",
      result:35
    },
    {
      stat:"2×4",
      result:8
    },
    {
      stat:"5×2",
      result:10
    },
    {
      stat:"0×5",
      result:0
    },
    {
      stat:"5×5",
      result:25
    },
    {
      stat:"4×4",
      result:16
    },
    {
      stat:"8×6",
      result:48
    },
  ];
  constructor() { }

  ngOnInit() {
    
  }
  pop(l){
    if(this.in<this.op.length){
      if(this.num.length<=1){
        this.message = "Congratulations";
        this.num=null;
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
