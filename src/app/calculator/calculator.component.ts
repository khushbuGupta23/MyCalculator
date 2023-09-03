import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'MyCalculator';
  toshow= '0';
  currentValue='';
  wirtetoinput(value:string){
      this.currentValue = this.currentValue + value
      this.toshow= this.currentValue
  }
  equal(){
    this.toshow= eval(this.currentValue)
    this.currentValue = this.toshow
  }
  clear(){
      this.currentValue='';
      this.toshow='0'
  }
  back(){
    this.currentValue = this.currentValue.slice(0,-1)
    this.toshow = this.currentValue
    if(this.currentValue==''){
        this.toshow='0'
    }
  }
  calcvalue(solve:any){
    if(solve.charAt(0) =='0'){
      solve= solve.slice(1,)
    }
    this.toshow = eval(solve)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
