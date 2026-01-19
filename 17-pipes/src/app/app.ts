import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ShortenPipe } from './custom-pipes/shorten/shorten-pipe';


@Component({
  selector: 'app-root',
  imports: [CommonModule, ShortenPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('shreyosi halder');

  date = new Date();
  price = signal(1000);
  user = signal({
    username: 'BikramPy',
    name: {
      firstname: 'Bikram',
      lastname: 'Saha'
    }
  }
  )
}
