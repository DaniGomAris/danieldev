import { AfterViewInit, Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
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
      title: 'La Morada Back',
      description: 'Backend de la aplicación La Morada. Utilizando MongoDB como base de datos, uso de JWT para control de acceso, envío de notificaciones por correo e implementacion de sistemas de caché en la nube para control de sesiones.',
      image: 'lamorada-back.png',
      github: 'https://github.com/DaniGomAris/la-morada-back',
      tech: ' ',
      techIcon: 'nodejs.png',
    },
    {
      title: 'Quoridor',
      description: 'Juego de tablero Quoridor. El juego consiste en mover tu peón desde un lado del tablero hasta el otro, mientras colocas muros para bloquear a tu oponente, el primer jugador en llegar al lado opuesto gana. Se implementa con Listas enlazadas y se utiliza el algoritmo de búsqueda A* para encontrar la mejor jugada.',
      image: 'quoridor.png',
      github: 'https://github.com/DaniGomAris/Quoridor',
      tech: ' ',
      techIcon: 'python.png',
    },
    {
      title: 'Axis Back',
      description: 'Backend de la aplicaicon movil axis, Utilizando MongoDB como base de datos, uso de JWT para control de acceso, envío de notificaciones por correo e implementacion de sistemas de caché en la nube para la generacion de QR y control de sesiones.',
      image: 'axis-back.png',
      github: 'https://github.com/DaniGomAris/axis-authenticator-back',
      tech: ' ',
      techIcon: 'nodejs.png',
    },
    {
      title: 'Emergency Attention Center',
      description: 'Sistema de atención de emergencias. Se implementa con colas de prioridad para gestionar las solicitudes de emergencia, asegurando que las más críticas se atiendan primero.',
      image: 'emergency-attention-center.png',
      github: 'https://github.com/DaniGomAris/Emergency_attencion_center',
      tech: ' ',
      techIcon: 'python.png',
    },
    {
      title: 'Axis authenticator',
      description: 'Aplicación de autenticación para dispositivos móviles. Para generacion de códigos QR para control de acceso a edificios.',
      image: 'axis.png',
      github: 'https://github.com/DaniGomAris/axis-authenticator',
      tech: ' ',
      techIcon: 'dart.png',
    },
    {
      title: 'La Morada',
      description: 'Aplicación web para la gestión de una clínica de psicologos. Permite a los usuarios reservar citas, a los psicologos gestionar su agenda y a los administradores controlar el funcionamiento de la clínica. (backend desplegado pero vencido)',
      image: 'lamorada.png',
      web: 'https://lamorada-clinica.vercel.app/',
      tech: ' ',
      techIcon: 'angular.png',
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
