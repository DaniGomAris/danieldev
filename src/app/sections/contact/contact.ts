import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/* types */

type OrbitIcon = {
  icon: string;
  alt: string;
  href: string;
  angle: number;
};

type ContactLink = {
  label: string;
  icon: string;
  href: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit, OnDestroy {

  /* view reference */
  @ViewChild('contactSection', { static: true })
  contactSection!: ElementRef<HTMLElement>;

  /* state */
  inView = false;
  private io?: IntersectionObserver;

  /* orbit icons data */
  orbitIcons: OrbitIcon[] = [
    { icon: 'angular.png', alt: 'Angular', href: '#', angle: 270 },
    { icon: 'railway.png', alt: 'Railway', href: '#', angle: 320 },
    { icon: 'git.png', alt: 'Git', href: '#', angle: 20 },
    { icon: 'python.png', alt: 'Python', href: '#', angle: 70 },
    { icon: 'nodejs.png', alt: 'Node.js', href: '#', angle: 120 },
    { icon: 'postman.png', alt: 'Postman', href: '#', angle: 170 },
    { icon: 'mongodb.png', alt: 'MongoDB', href: '#', angle: 220 },
  ];

  /* contact links data */
  links: ContactLink[] = [
    { label: 'WhatsApp', icon: 'whatsapp.png', href: 'https://wa.me/+573024596983' },
    { label: 'Facebook', icon: 'facebook.png', href: 'https://facebook.com/Daniel.Gomezarisitizabal' },
    { label: 'Instagram', icon: 'instagram.png', href: 'https://instagram.com/danielgomezsss' },
    { label: 'Gmail', icon: 'gmail.png', href: 'mailto:dani.gom.dev@gmail.com' },
    { label: 'Telegram', icon: 'telegram.png', href: 'https://t.me/DaniGomAris' },
    { label: 'GitHub', icon: 'github.png', href: 'https://github.com/danigomaris' },
    { label: 'LinkedIn', icon: 'linkedin.png', href: 'https://www.linkedin.com/in/daniel-gomez-a7b6872b5' },
  ];

  /* lifecycle - after view init */
  ngAfterViewInit(): void {

    const scope = this.contactSection.nativeElement;

    /* reveal animation setup */
    const reveals = Array.from(scope.querySelectorAll('.reveal')) as HTMLElement[];
    reveals.forEach((el, i) =>
      el.style.setProperty('--reveal-delay', `${i * 90}ms`)
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    /* orbit animation trigger */
    this.io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView = true;
          this.io?.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' }
    );

    this.io.observe(scope);
  }

  /* cleanup */
  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
