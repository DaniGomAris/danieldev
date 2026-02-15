import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  /* view reference */
  @ViewChild('headerRoot') headerRoot!: ElementRef;

  /* state */
  menuOpen = false;

  /* menu actions */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  /* navigation */
  navigateTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    this.closeMenu();
  }

  /* click outside listener */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.menuOpen) return;

    const clickedInside =
      this.headerRoot.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.menuOpen = false;
    }
  }
}
