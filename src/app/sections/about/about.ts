import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

  /* lifecycle */
  ngAfterViewInit(): void {
    const scope = document.querySelector('#about');
    if (!scope) return;

    /* reveal elements */
    const elements = Array.from(
      scope.querySelectorAll('.reveal')
    ) as HTMLElement[];

    /* stagger setup */
    elements.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${i * 90}ms`);
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
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
