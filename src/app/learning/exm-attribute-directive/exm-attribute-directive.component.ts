import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-attribute-directive',
  templateUrl: './exm-attribute-directive.component.html',
  styleUrls: ['./exm-attribute-directive.component.css']
})
export class ExmAttributeDirectiveComponent {
  greenText: string = "green";
  num1: number = Math.random() * 10

  getRandomVal() {
    return 8 > Math.random() * 100;
  }

  computeClass() {
    console.log(this.num1);
    return {
      "test1": this.num1 > 8,
      "test2": this.num1 < 8
    };
  }
}
