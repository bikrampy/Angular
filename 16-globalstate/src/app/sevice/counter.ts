import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count = signal(10)
  increment(){
    this.count.update((c) => c + 1)
  }
  decrement(){
    this.count.update((c) => c - 1)
  }
  reset(){
    this.count.set(0)
  }
}
