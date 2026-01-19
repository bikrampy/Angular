import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userId = signal(0)
  userName = signal('')
  userAge = signal(0)
  constructor(public route: ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.userId.set(params['id'])
      this.userName.set(params['name'])
      this.userAge.set(params['age'])
    })
  };
}
