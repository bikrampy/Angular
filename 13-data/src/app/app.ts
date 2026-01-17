import { Component, Input, signal } from '@angular/core';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user = signal('');
  addUser(){
    if(this.user()){
      this.users.update((data) => ([...data, this.user()]))
    };
    this.user.set('')
  }
  users = signal(['Shreyosi', 'Manu', 'Bithi']);
}
