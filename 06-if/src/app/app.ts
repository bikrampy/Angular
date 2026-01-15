import { Component, signal, WritableSignal } from '@angular/core';
type Status = 'pending' | 'complete' | 'error';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user: WritableSignal<string> = signal('Shreyosi');
  isLoggedIn: WritableSignal<boolean> = signal(true);
  status: WritableSignal<Status> = signal('pending');
  handleSelect(e: Event){
    const value = (e.target as HTMLSelectElement).value;
    this.status.set((value as Status))
  }
}
