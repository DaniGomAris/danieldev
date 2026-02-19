import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/* types */
interface Project {
  title: string;
  descriptionKey: string;
  image: string;
  github?: string;
  web?: string;
  tech?: string;
  techIcon?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {

  /* projects data */
  projects: Project[] = [
    {
      title: 'La Morada Back',
      descriptionKey: 'PROJECTS.ITEMS.LA_MORADA_BACK_DESC',
      image: 'lamorada-back.png',
      github: 'https://github.com/DaniGomAris/la-morada-back',
      tech: ' ',
      techIcon: 'nodejs.png',
    },
    {
      title: 'Quoridor',
      descriptionKey: 'PROJECTS.ITEMS.QUORIDOR_DESC',
      image: 'quoridor.png',
      github: 'https://github.com/DaniGomAris/Quoridor',
      tech: ' ',
      techIcon: 'python.png',
    },
    {
      title: 'Axis Back',
      descriptionKey: 'PROJECTS.ITEMS.AXIS_BACK_DESC',
      image: 'axis-back.png',
      github: 'https://github.com/DaniGomAris/axis-authenticator-back',
      tech: ' ',
      techIcon: 'nodejs.png',
    },
    {
      title: 'Emergency Attention Center',
      descriptionKey: 'PROJECTS.ITEMS.EAC_DESC',
      image: 'emergency-attention-center.png',
      github: 'https://github.com/DaniGomAris/Emergency_attencion_center',
      tech: ' ',
      techIcon: 'python.png',
    },
    {
      title: 'Axis authenticator',
      descriptionKey: 'PROJECTS.ITEMS.AXIS_AUTH_DESC',
      image: 'axis.png',
      github: 'https://github.com/DaniGomAris/axis-authenticator',
      tech: ' ',
      techIcon: 'dart.png',
    },
    {
      title: 'La Morada',
      descriptionKey: 'PROJECTS.ITEMS.LA_MORADA_DESC',
      image: 'lamorada.png',
      web: 'https://lamorada-clinica.vercel.app/',
      tech: ' ',
      techIcon: 'angular.png',
    },
  ];

  /* lifecycle */
  ngAfterViewInit(): void {

    /* reveal elements */
    const elements = Array.from(
      document.querySelectorAll('#projects .reveal') as NodeListOf<HTMLElement>
    );

    const cards = Array.from(
      document.querySelectorAll('#projects .project-card.reveal') as NodeListOf<HTMLElement>
    );

    /* stagger setup */
    cards.forEach((card, i) => {
      card.style.setProperty('--reveal-delay', `${i * 90}ms`);
    });

    /* intersection observer */
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
