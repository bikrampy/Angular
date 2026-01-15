import { Component, signal, WritableSignal } from '@angular/core';
type Status = 'pending' | 'shipped' | 'outForDelivery' | 'delivered';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('08-switch');
  status: WritableSignal<Status> = signal('pending');
  handleSelect(e: Event){
    let val:Status = ((e.target as HTMLSelectElement).value as Status);
    this.status.set(val);
  }
}
