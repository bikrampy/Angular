import { Component } from '@angular/core';
import { Counter } from '../sevice/counter';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public state: Counter){}
}
