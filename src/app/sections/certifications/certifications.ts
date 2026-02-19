import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/* certificate type */
type Certificate = {
  tag: string;
  tagKey: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
};

/* component */
@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications implements AfterViewInit, OnDestroy {

  @ViewChild('certSection', { static: true })
  certSection!: ElementRef<HTMLElement>;

  inView = false;
  private io?: IntersectionObserver;

  /* certificates data */
  certificates: Certificate[] = [
    {
      tag: 'backend',
      tagKey: 'CERTIFICATIONS.TAGS.backend',
      titleKey: 'CERTIFICATIONS.ITEMS.PYTHON_TITLE',
      descriptionKey: 'CERTIFICATIONS.ITEMS.PYTHON_DESC',
      image: 'python_logo.png',
      link: 'https://drive.google.com/file/d/1DjsFbKUtEDzJ2uJT17fMYu6aVeSJpxWi/view?usp=sharing'
    }
  ];

  /* lifecycle */
  ngAfterViewInit(): void {
    const scope = this.certSection.nativeElement;

    const elements = Array.from(scope.querySelectorAll('.reveal')) as HTMLElement[];
    elements.forEach((el, i) => el.style.setProperty('--reveal-delay', `${i * 90}ms`));

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

    elements.forEach((el) => revealObserver.observe(el));

    this.io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView = true;
          this.io?.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -12% 0px' }
    );

    this.io.observe(scope);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
