import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exm-child',
  templateUrl: './exm-child.component.html',
  styleUrls: ['./exm-child.component.css']
})
export class ExmChildComponent {

  @Input()
  ipData: number = 0;

  childGeneratedData: string = "";

  @Output()
  opData = new EventEmitter<String>();

  uploadDatatoParent() {
    this.childGeneratedData = "child" + Math.floor(Math.random() * 1000);
    this.opData.emit(this.childGeneratedData);
  }
}
