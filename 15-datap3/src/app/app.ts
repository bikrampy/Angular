import { Component, signal } from '@angular/core';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter = signal(0);
  updateCounter(val: number){
    this.counter.update((item) => item + val)
  }
}
