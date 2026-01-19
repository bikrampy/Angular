import { Component, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public router: Router){}
  user = signal(
    {
      id: 1,
      name: 'beingbifrons',
      age: 23
    }
  );
  user2 = signal(
    {
      id: 2,
      name: 'shreyyy',
      age: 22
    }
  );
  goToProfile(){
    this.router.navigate(['profile', this.user2().id, this.user2().name, this.user2().age])
  }
}
