import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exm-template-ref',
  templateUrl: './exm-template-ref.component.html',
  styleUrls: ['./exm-template-ref.component.css']
})
export class ExmTemplateRefComponent {

  contact: string = "";

  submitMessage: string = "invalid forom data!";

  name: string = "";

  onClickSubmit(phoneNumber: string) {
    this.contact = phoneNumber;
  }

  onSubmit(formData: NgForm) {
    this.name = formData.value;
  }

}
