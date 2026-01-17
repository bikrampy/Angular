import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Body } from './body/body';

@Component({
  selector: 'app-root',
  imports: [Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
