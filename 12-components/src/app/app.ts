import { Component, signal } from '@angular/core';
import { User } from './User/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  arr = signal([0,1,2,3,4]);
}
