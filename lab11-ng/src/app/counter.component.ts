import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <input type='button' value='+' (click)='increaseCounter()'>
      {{counter}}
      <input type='button' value='-' (click)='decreaseCounter()'>
      <ng-content></ng-content>
    `
})
export class CounterComponent{
  @Input()
  counter: number;
  counterValue: number;

  @Output() counterChange = new EventEmitter();

  increaseCounter(){
    this.counter++;
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }

  decreaseCounter(){
    this.counter--;
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }


}
