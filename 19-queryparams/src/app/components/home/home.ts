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
      name: 'beingbifrons',
      id: 1,
      age: 23
    }
  );
  goToProfile(){
    this.router.navigate(['profile'],{
      queryParams: {
        name: this.user().name,
        id: this.user().id,
        age: this.user().age
      }
    }
    )
  }
}
