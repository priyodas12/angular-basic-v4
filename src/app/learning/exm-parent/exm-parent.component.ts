import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-parent',
  templateUrl: './exm-parent.component.html',
  styleUrls: ['./exm-parent.component.css']
})
export class ExmParentComponent {

  inputNumber: number = 0;

  valueFromChild: string = "";

  calculateNumberOnClick() {
    this.inputNumber = Math.floor(Math.random() * 1000);
    console.log(this.inputNumber);
  }

  getChildData(event: any) {
    console.log(event);
    this.valueFromChild = event;
  }
}
