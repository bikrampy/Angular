import { Component, signal, WritableSignal } from '@angular/core';
import { UserData } from '../../services/userData/user-data';
import { User } from '../../services/userData/user-data-interface';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  filteredData: WritableSignal<User | undefined> = signal(undefined);
  constructor(private UserDataServices: UserData, public route: ActivatedRoute){
  };
  ngOnInit(){
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.UserDataServices.getProfiles().subscribe((data) => {
      const foundUser = data.users.find(user => user.id === userId);
      this.filteredData.set(foundUser)
    });
  }
}
