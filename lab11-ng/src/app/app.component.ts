import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
     {{title}}
    </h1>

    <app-counter [counter]="componentCounterValue" (counterChange)="countChange($event)"></app-counter>
    <br>
    Component Counter Value =  {{componentCounterValue}}


  `
})
export class AppComponent {
  title = 'Angular Exercise';
  componentCounterValue=0;

  countChange(data){
    this.componentCounterValue=data;
  }

  
}
