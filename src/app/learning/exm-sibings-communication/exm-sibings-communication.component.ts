import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-sibings-communication',
  templateUrl: './exm-sibings-communication.component.html',
  styleUrls: ['./exm-sibings-communication.component.css']
})
export class ExmSibingsCommunicationComponent {

  inputFromA: string = "";

  getInputFromA(event: any) {
    console.log(event);
    this.inputFromA = event;
  }

}
