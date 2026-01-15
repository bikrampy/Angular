import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  heading: string = `Interpolation and Property Binding`;
  websiteURL: string = 'https://www.beingbifrons.shop';
  target: string = '_blank';
  imgSrc: string = '/image.png'
  counter: number = 0;
  addValue(): void{
    this.counter++;
  }
  deductValue(): void{
    if (this.counter > 0){
      this.counter--;
    }
  }
}
