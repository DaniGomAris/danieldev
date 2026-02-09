import { Component } from '@angular/core';

type Tech = { icon: string; name: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  techs: Tech[] = [
    { icon: 'angular.png', name: 'Angular' },
    { icon: 'css.png', name: 'CSS' },
    { icon: 'docker.png', name: 'Docker' },
    { icon: 'firebase.png', name: 'Firebase' },
    { icon: 'git.png', name: 'Git' },
    { icon: 'github.png', name: 'GitHub' },
    { icon: 'html.png', name: 'HTML' },
    { icon: 'javascript.png', name: 'JavaScript' },
    { icon: 'mongodb.png', name: 'MongoDB' },
    { icon: 'postman.png', name: 'Postman' },
    { icon: 'python.png', name: 'Python' },
    { icon: 'railway.png', name: 'Railway' },
    { icon: 'redis.png', name: 'Redis' },
    { icon: 'sonar.png', name: 'SonarQube' },
    { icon: 'vercel.png', name: 'Vercel' },
  ];

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
