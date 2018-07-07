import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input = '';
  values = [];
  operation:boolean = true;
  output:number = 0;
  constructor() { }

  ngOnInit() {
  }

  setValue(data){
    if(this.operation){
      this.input = this.input+ data.toString();
    }
    this.output = parseInt(this.input);
     console.log(this.input.trim());
  }

   add(){
    
    (this.input.length)?this.values.push(this.input):'';
    this.values.push('add');
    (this.input.length)?this.output = parseInt(this.input):'';
    this.input = "";
   }
   substract(){
    //this.operation = false;
    (this.input.length)?this.values.push(this.input):'';
    this.values.push('subs');
    (this.input.length)?this.output = parseInt(this.input):'';
    this.input = "";
   }

   multiply(){
    
    (this.input.length)?this.values.push(this.input):'';
    this.values.push('mul');
    (this.input.length)?this.output = parseInt(this.input):'';
    this.input = "";
   }

   devide(){
    (this.input.length)?this.values.push(this.input):'';
    this.values.push('div');
    (this.input.length)?this.output = parseInt(this.input):'';
    this.input = "";
   }

   mod(){
    (this.input.length)?this.values.push(this.input):'';
    this.values.push('mod');
    (this.input.length)?this.output = parseInt(this.input):'';
    this.input = "";
   }
   setDecimal(){
     console.log("set decimal")
   }
   setOperator(op){
     console.log(op);
   }
   clear(){
     this.values = [];
     this.output=0;
   }
   calculate(){
    
    debugger;
    this.values.push(this.input);
    this.input = "";
    if(this.values.length>=3){
      for(let i=1;i<=this.values.length;i= i+2){
        if(this.values[i] == 'add'){
          this.output = parseInt(this.values[i-1]) + parseInt(this.values[i+1]);
        }else if(this.values[i] == 'subs'){
          this.output = parseInt(this.values[i-1]) - parseInt(this.values[i+1]);
        }else if(this.values[i] == 'mul'){
          this.output = parseInt(this.values[i-1]) * parseInt(this.values[i+1]);
        }else if(this.values[i] == 'div'){
          this.output = parseInt(this.values[i-1]) / parseInt(this.values[i+1]);
        }else if(this.values[i] == 'mod'){
          this.output = parseInt(this.values[i-1]) % parseInt(this.values[i+1]);
        }
      }
    }
    this.values = [];
    this.values.push(this.output)
     console.log("calculate");
   }


}
