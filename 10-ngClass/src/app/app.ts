import { Component, signal } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NgClass]
})
export class App {
  isDarkMode = signal(false);
  pClasses = ['mb-2', 'text-4xl'];
  toggle(){
    this.isDarkMode.update(val => !val)
  }
}
