import { Component } from '@angular/core';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Profile ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  heading: string = 'Understanding Component In Angular'
}
