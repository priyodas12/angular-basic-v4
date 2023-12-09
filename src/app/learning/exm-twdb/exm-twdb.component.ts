import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-twdb',
  templateUrl: './exm-twdb.component.html',
  styleUrls: ['./exm-twdb.component.css']
})
export class ExmTwdbComponent {
  inputText: string = "Te";

  // inputTextHandler(event: any) {
  //   console.log(event);
  //   this.inputText = (event.target as HTMLInputElement).value
  // }
}
