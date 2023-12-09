import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-structural-directive',
  templateUrl: './exm-structural-directive.component.html',
  styleUrls: ['./exm-structural-directive.component.css']
})
export class ExmStructuralDirectiveComponent {
  status: boolean = false;
  productList: string[] = [
    "product1", "product2", "product3", "product4", "product5", "product6"
  ]

  mobileList: any[] = [
    {
      name: "Nokia",
      price: 10000
    },
    {
      name: "Samsung",
      price: 16000
    },
    {
      name: "Apple",
      price: 130000
    },
    {
      name: "Oppo",
      price: 80000
    },
    {
      name: "1Plus",
      price: 40000
    }
  ]
  onClickBtn() {
    console.log(Math.floor(Math.random() * 100));
    this.status = Math.floor(Math.random() * 100) % 2 === 0
    console.log(this.status);
  }
}
