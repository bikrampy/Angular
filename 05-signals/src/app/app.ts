import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(){
    effect(() => {
      console.log('Value of Count is: ',this.count());
    })
    effect(() => {
      console.log('Value of Total is: ',this.total());
    })
  }
  count = signal(0);
  addCount(){
    this.count.update(value => value + 1);
    if (this.count() > 10) {
      this.count.set(0);
      console.log('Value of Count resets to 0');
    }
  }
  deductCount(){
    this.count.update(value => value - 1);
    if (this.count() < 0) {
      this.count.set(0);
      console.log('Value of Count resets to 0');
    }
  }
  price = signal(1000);
  quantity = signal('1');
  total = computed(() => this.price() * Number(this.quantity()))
  changeQuantity(val: string){
    this.quantity.set(val)
  }
}
