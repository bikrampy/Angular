import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TrimTextPipe } from './custom-pipes/trim-text-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TrimTextPipe],
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
