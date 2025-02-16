import { Component } from '@angular/core';
//1
//class decorator ==>meta
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,  //module
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-ecommerce';
}
