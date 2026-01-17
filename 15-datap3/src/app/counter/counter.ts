import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Output() countChange = new EventEmitter<number>();
  incrementVal(){
    this.countChange.emit(1)
  }
}
