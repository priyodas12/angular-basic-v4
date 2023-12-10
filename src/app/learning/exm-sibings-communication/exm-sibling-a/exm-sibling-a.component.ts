import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exm-sibling-a',
  templateUrl: './exm-sibling-a.component.html',
  styleUrls: ['./exm-sibling-a.component.css']
})
export class ExmSiblingAComponent {

  senderInput: string = "";

  @Output()
  inputToParent: EventEmitter<string> = new EventEmitter<string>();;

  onSearchInput(event: any) {
    this.senderInput = (event.target as HTMLInputElement).value;
    this.inputToParent.emit(this.senderInput);
  }
}
