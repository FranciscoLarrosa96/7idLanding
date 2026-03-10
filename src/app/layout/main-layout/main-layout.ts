import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer, ScrollToTop],
  template: `
    <div class="flex flex-col min-h-screen bg-background-light">
      <app-navbar />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
      <app-scroll-to-top />
    </div>
  `,
})
export class MainLayout {}
