import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName = signal('')
  userAge = signal(0)
  userId = signal(0)
  constructor(public route: ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.userName.set(params['name'])
      this.userAge.set(params['age'])
      this.userId.set(params['id'])
    })
  };
}
