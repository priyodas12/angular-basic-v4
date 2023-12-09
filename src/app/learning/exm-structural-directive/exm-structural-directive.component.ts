import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-structural-directive',
  templateUrl: './exm-structural-directive.component.html',
  styleUrls: ['./exm-structural-directive.component.css']
})
export class ExmStructuralDirectiveComponent {
  status: boolean = false;
  onClickBtn() {
    console.log(Math.floor(Math.random() * 100));
    this.status = Math.floor(Math.random() * 100) % 2 === 0
    console.log(this.status);
  }
}
