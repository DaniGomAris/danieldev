import { AfterViewInit, Component } from '@angular/core';

type Tech = { icon: string; name: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
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
    { icon: 'nodejs.png', name: 'Node.js' },
    { icon: 'postman.png', name: 'Postman' },
    { icon: 'python.png', name: 'Python' },
    { icon: 'railway.png', name: 'Railway' },
    { icon: 'redis.png', name: 'Redis' },
    { icon: 'render.png', name: 'Render' },
    { icon: 'sonar.png', name: 'SonarQube' },
    { icon: 'vercel.png', name: 'Vercel' },
    { icon: 'dart.png', name: 'Dart' },
  ];

  ngAfterViewInit(): void {
    const scope = document.querySelector('#home');
    if (!scope) return;

    const elements = Array.from(scope.querySelectorAll('.reveal')) as HTMLElement[];

    // stagger por orden (h1, h2, p, etc.)
    elements.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${i * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
