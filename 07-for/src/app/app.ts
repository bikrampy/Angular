import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
type User = {
  id: number,
  name: string,
  age: number
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users: WritableSignal<User[]> = signal([
    {
      id: 1,
      name: 'Shreyosi Halder',
      age: 22
    },
    {
      id: 2,
      name: 'Bikram Saha',
      age: 23
    },
    {
      id: 3,
      name: 'Saswata Das',
      age: 21
    }
  ]);
}
