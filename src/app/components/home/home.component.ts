import { Component } from '@angular/core';
import { Track } from '../../Models/track';

//1
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
//prop
userName:string="Ahmed"

//method
sayHello(){
  console.log(`hello ${this.userName}`);
  
}
  trackProp: Track = new Track('Frontend', 'sohag', ['js', 'css']);
}
