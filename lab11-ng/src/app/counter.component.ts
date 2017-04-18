import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <input type='button' value='+' (click)='increaseCounter()'>
      {{counterValue}}
      <input type='button' value='-' (click)='decreaseCounter()'>
      <ng-content></ng-content>
    `
})
export class CounterComponent{
  @Input() counter;
  counterValue = 0;
  @Output() counterChange = new EventEmitter();

  increaseCounter(){
    this.counterValue++;
  }

  decreaseCounter(){
    this.counterValue--;
  }

  setCounterChange(){
    
  }

}
