import { Component, Input, signal } from '@angular/core';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedUser = signal('');
  selectUser(user: string){
    this.selectedUser.set(user)
  }
  deleteUser(user: string){
    this.users.update(
      (data) => data.filter((item) => item != user)
    )
    if (user === this.selectedUser()) {
      this.selectedUser.set('')
    }
  }
  user = signal('');
  addUser(){
    if(this.user()){
      this.users.update((data) => ([...data, this.user()]))
    };
    this.user.set('')
  }
  users = signal(['Shreyosi', 'Manu', 'Bithi']);
}
