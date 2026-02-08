import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "./layout/header/header";

import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Certifications } from './sections/certifications/certifications';
import { Contact } from './sections/contact/contact';
import { Blog } from './sections/blog/blog';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Header, 
    Home, 
    About, 
    Projects,
    Blog, 
    Certifications, 
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('danieldev');
}
