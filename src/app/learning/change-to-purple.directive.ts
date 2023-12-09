import { ElementRef, Directive } from '@angular/core';

@Directive({
  selector: '[appChangeToPurple]'
})
export class ChangeToPurpleDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'purple';
  }

}
