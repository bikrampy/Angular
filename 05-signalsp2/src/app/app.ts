import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data: WritableSignal<string> = signal('Shreyosi Halder')
  setData(val: string){
    this.data.set(val)
  }
  resetData(){
    this.data.set('Shreyosi Halder')
  }
}
