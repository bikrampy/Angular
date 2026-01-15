import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  username: string = '';
  email: string = '';
  skill: string = '';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  sampleText: string = ''
  onInput(event: Event) {
    const value: string = (event.target as HTMLInputElement).value;
    this.username = value;
    console.log(event)
    console.log('Typing:', value);
  };
  onChange(event: Event) {
    const value: string = (event.target as HTMLInputElement).value;
    this.email = value;
    console.log(event);
    console.log('Final Value:', value);
  };
  onClick(event: Event) {
    console.log('Button Clicked');
    console.log(event);
  };
  onSelectChange(event: Event){
    const value: string = (event.target as HTMLSelectElement).value;
    this.skill = value;
  }
  handleNum1(event: Event){
    const value = Number((event.target as HTMLInputElement).value);
    this.num1 = value;
  }
  handleNum2(event: Event){
    const value = Number((event.target as HTMLInputElement).value);
    this.num2 = value;
  }
  calculateSum() {
    this.result = this.num1 + this.num2;
  }
  // calculateSum(num1: string, num2: string) {
  //   this.result = Number(num1) + Number(num2);
  // };
  onBlur(){
    console.log('Loses Focus.')
  };
  onFocus(){
    console.log('Gains Focus.')
  };
  onEnter(){
    this.sampleText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quisquam quis incidunt maxime necessitatibus aspernatur, id, illo, impedit similique perspiciatis libero mollitia placeat molestias et a atque inventore quos iusto?';
  }
  onLeave(){
    this.sampleText = '';
  }
}
