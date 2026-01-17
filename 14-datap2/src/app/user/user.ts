import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() username: string | undefined;
  @Output() onselect= new EventEmitter<string>();
  @Output() ondelete= new EventEmitter<string>();
  selectUser(){
    this.onselect.emit(this.username)
  }
  deleteUser(){
    this.ondelete.emit(this.username)
  }
}
