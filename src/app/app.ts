import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = '7idLandingPage';
  menuOpen = signal(false);


  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }

  ngAfterViewInit() {
    const btn = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');

    btn?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });
  }


toggleMenu() {
  console.log('menuOpen:', this.menuOpen());
    
  this.menuOpen.set(!this.menuOpen());
  console.log('menuOpen after toggle:', this.menuOpen());
  
  
}
}
