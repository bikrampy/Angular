import { Component } from '@angular/core';
import { Counter } from '../sevice/counter';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  constructor(public state: Counter){}
}
