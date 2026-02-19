import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements AfterViewInit, OnDestroy {

  @ViewChild('blogSection', { static: true })
  blogSection!: ElementRef<HTMLElement>;

  inView = false;
  private io?: IntersectionObserver;

  ngAfterViewInit(): void {
    const scope = this.blogSection.nativeElement;

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
