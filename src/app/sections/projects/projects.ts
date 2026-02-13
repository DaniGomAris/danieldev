import { AfterViewInit, Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  web?: string;
  tech?: string;
  techIcon?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {

  projects: Project[] = [
    {
      title: 'Titulo de proyecto',
      description: 'Descripcion del proyecto',
      image: 'repository.png',
      github: 'https://github.com',
      web: 'https:',
      tech: ' ',
      techIcon: 'python.png',
    },
    {
      title: 'Titulo de proyecto',
      description: 'Descripcion del proyecto',
      image: 'repository.png',
      github: 'https://github.com',
      tech: ' ',
      techIcon: 'angular.png',
    },
    {
      title: 'Titulo de proyecto',
      description: 'Descripcion del proyecto',
      image: 'repository.png',
      github: 'https://github.com',
      web: 'https:',
      tech: ' ',
      techIcon: 'git.png',
    },
    {
      title: 'Titulo de proyecto',
      description: 'Descripcion del proyecto',
      image: 'repository.png',
      github: 'https://github.com',
      tech: ' ',
      techIcon: 'nodejs.png',
    },
    {
      title: 'Titulo de proyecto',
      description: 'Descripcion del proyecto',
      image: 'repository.png',
      github: 'https://github.com',
      web: 'https:',
      tech: ' ',
      techIcon: 'angular.png',
    },
    {
      title: 'Titulo de proyecto',
      description: 'Descripcion del proyecto',
      image: 'repository.png',
      github: 'https://github.com/tu-usuario/api-fastapi',
      tech: ' ',
      techIcon: 'python.png',
    },
  ];

  ngAfterViewInit(): void {
    const elements = Array.from(
      document.querySelectorAll('#projects .reveal') as NodeListOf<HTMLElement>
    );

    const cards = Array.from(
      document.querySelectorAll('#projects .project-card.reveal') as NodeListOf<HTMLElement>
    );

    // stagger
    cards.forEach((card, i) => {
      card.style.setProperty('--reveal-delay', `${i * 90}ms`);
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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
