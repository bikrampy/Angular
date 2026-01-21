import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';
type UserObjType = { id: number, name: string, age: number, role: string, city: string}
@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userData: WritableSignal<UserObjType>= signal({
    id: -1,
    name: '',
    age: -1,
    role: '',
    city: ''
  })
  constructor(public userService: UserService, public route: ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.userData.set(this.userService.users().filter((item) => item.id == params['id'])[0])
    })
  };
}
