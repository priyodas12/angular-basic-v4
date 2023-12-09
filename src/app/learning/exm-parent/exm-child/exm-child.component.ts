import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-exm-child',
  templateUrl: './exm-child.component.html',
  styleUrls: ['./exm-child.component.css']
})
export class ExmChildComponent {

  @Input()
  ipData: number = 0;
}
