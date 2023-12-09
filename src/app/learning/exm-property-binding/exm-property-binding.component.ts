import { Component } from '@angular/core';

@Component({
  selector: 'app-exm-property-binding',
  templateUrl: './exm-property-binding.component.html',
  styleUrls: ['./exm-property-binding.component.css']
})
export class ExmPropertyBindingComponent {
  imgURL: string = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701993600&semt=sph";
  desc: string = "<p>abstract wallpaper from google</p>"
  visitGoogle: string = "https://www.google.com/search?q=wallpaper"
  moreWallpaper: string = "Search Wallpaper"
  buttonStatus: boolean = true;
}
