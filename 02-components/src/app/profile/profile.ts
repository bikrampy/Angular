import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: string = 'Bikram Saha';
  bio: string = 'A Frontend Developer passionate about crafting seamless user experiences.';
  githubUrl: string = 'https://github.com/bikrampy';
  openGithub() {
    window.open(this.githubUrl, '_blank');
  }
}
