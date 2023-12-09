import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-event-binding',
  templateUrl: './exm-event-binding.component.html',
  styleUrls: ['./exm-event-binding.component.css']
})
export class ExmEventBindingComponent {
  count: number = 0;
  inputText: string = "";

  incrementTenHandler = () => {
    this.count = this.count + 10;
  }

  decrementTenHandler = () => {
    this.count = this.count - 10;
  }

  incrementFiveHandler = () => {
    this.count = this.count + 5;
  }

  decrementFiveHandler = () => {
    this.count = this.count - 5;
  }

  inputEventHandler(event: any) {
    console.log(event);
    this.inputText = (event.target as HTMLInputElement).value;
  }
}
