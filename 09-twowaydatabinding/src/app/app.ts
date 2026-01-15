import { Component, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
type Signal<T> = {
  [key: string]: WritableSignal<T>
}
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  NumberSignals: Signal<number> = {
    age: signal(23)
  };
  TextSignals: Signal<string> = {
    username: signal('Bikram Saha')
  };
  data = 'Khat';
  data2 = signal('Shreyosi Halder');
  data3 = signal('Bikram Saha');
  data4 = signal({
    firstName: 'Saswata',
    lastName: 'Das'
  })

  get dt3() : string {
    return this.data3()
  }
  set dt3(val: string) {
    this.data3.set(val)
  }
  
  public get dataFname() : string {
    return this.data4().firstName
  }
  public set dataFname(val: string) {
    this.data4.update((item) => ({...item, firstName: val}))
  }
  public get dataLname() : string {
    return this.data4().lastName
  }
  public set dataLname(val: string) {
    this.data4.update((item) => ({...item, lastName: val}))
  }
  
  
  handleNumberValue(e: Event, variable: keyof typeof this.NumberSignals){
    const input = e.target as HTMLInputElement;
    this.NumberSignals[variable].set(Number(input.value));
  }
  handleTextValue(e: Event, variable: keyof typeof this.TextSignals){
    const input = e.target as HTMLInputElement;
    this.TextSignals[variable].set(input.value);
  }
  constructor(){
    effect(() => {
      console.log(this.NumberSignals['age']());
    })
    effect(() => {
      console.log(this.TextSignals['username']());
    })
  }
}
