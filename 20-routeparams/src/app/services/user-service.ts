import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal([
    { id: 1, name: 'Bikram Saha', age: 23, role: 'Frontend Developer', city: 'Kolkata'},
    { id: 2, name: 'Saswata Das', age: 20, role: 'Software Developer', city: 'Kolkata'},
    { id: 3, name: 'Shreyosi Halder', age: 22, role: 'UI/UX Designer', city: 'Kolkata'},
    { id: 4, name: 'Sampad Kar', age: 21, role: 'ML Engineer', city: 'Kolkata'},
  ]
  );
}
