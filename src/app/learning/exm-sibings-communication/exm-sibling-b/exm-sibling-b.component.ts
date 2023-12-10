import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exm-sibling-b',
  templateUrl: './exm-sibling-b.component.html',
  styleUrls: ['./exm-sibling-b.component.css']
})
export class ExmSiblingBComponent {

  @Input()
  receievedData: string = "";
}
