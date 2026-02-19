import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild('headerRoot') headerRoot!: ElementRef;

  menuOpen = false;
  currentLang: 'es' | 'en' = 'es';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang || this.translate.defaultLang || 'es') as 'es' | 'en';
  }

  setLang(lang: 'es' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  navigateTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.menuOpen) return;

    const clickedInside = this.headerRoot.nativeElement.contains(event.target);
    if (!clickedInside) this.menuOpen = false;
  }
}
