import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p404',
  imports: [],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {
  constructor(public router: Router){}
  redirectTo(v: string){
    this.router.navigate([v])
  }
}
