import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss'],
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
export class DivisionComponent implements OnInit {
  in:number=0;
  message:string=null;
  num:Array<number>=[3,4,3,4,5,1,3,2,2,4,6,8,0,10,8,9];
  num2:any[]=[3,4,3,4,5,1,3,2,2,4,6,8,0,10,8,9];
  op:Object[]=[
    {
      stat:"2÷2",
      result:1
    },
    {
      stat:"3÷1",
      result:3
    },
    {
      stat:"4÷2",
      result:2
    },
    {
      stat:"6÷3",
      result:2
    },
    {
      stat:"9÷3",
      result:3
    },
    {
      stat:"8÷2",
      result:4
    },
    {
      stat:"12÷4",
      result:3
    },
    {
      stat:"16÷4",
      result:4
    },
    {
      stat:"25÷5",
      result:5
    },
    {
      stat:"36÷9",
      result:4
    },
    {
      stat:"12÷2",
      result:6
    },
    {
      stat:"24÷3",
      result:8
    },
    {
      stat:"0÷5",
      result:0
    },
    {
      stat:"60÷6",
      result:10
    },
    {
      stat:"64÷8",
      result:8
    },
    {
      stat:"81÷9",
      result:9
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
