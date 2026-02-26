import { Component, OnInit, signal } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  showTransition = signal(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showTransition.set(true);
        // Scroll to top on navigation
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.showTransition.set(false);
          AOS.refresh();
        }, 400);
      }
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }
}
