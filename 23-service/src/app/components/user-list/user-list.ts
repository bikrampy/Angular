import { Component, signal, WritableSignal } from '@angular/core';
import { UserData } from '../../services/userData/user-data';
import { User } from '../../services/userData/user-data-interface';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  usersData: WritableSignal<User[] | undefined> = signal(undefined);
  constructor(private UserDataServices: UserData){
  };
  ngOnInit(){
    this.UserDataServices.getProfiles().subscribe((data) => {
      this.usersData.set(data.users)
    })
  }
}
