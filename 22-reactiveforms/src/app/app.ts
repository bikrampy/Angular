import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // title = new FormControl('', [Validators.required, Validators.minLength(10)]);
  // submit(){
  //   console.log(this.title.value);
  // };
  // reset(){
  //   this.title.reset();
  //   console.log(this.title.value);
  // };

  // userDetail = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   city: new FormControl(''),
  // });
  // handleUserForm(){
  //   console.log(this.userDetail.value)
  // };

  userEmail = signal('');
  userPassword = signal('');
  logInForm = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ),
  })
  handleLoginForm(){
    this.userEmail.set(this.logInForm.value.email as string)
    this.userPassword.set(this.logInForm.value.password as string)
  }
}
