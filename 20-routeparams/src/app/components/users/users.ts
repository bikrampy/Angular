import { Component, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';
type UserObjType = { id: number, name: string, age: number, role: string, city: string}
@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users: WritableSignal<UserObjType[]> = signal([])
  constructor(public userService: UserService){}
  ngOnInit(){
    // console.log(this.userService.users());
    this.users.set(this.userService.users())
  }
}
