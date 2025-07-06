import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import * as AOS from 'aos';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';
import { NgParticlesModule } from 'ng-particles';
@Component({
  selector: 'app-root',
  imports: [CommonModule, NgParticlesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = '7idLandingPage';
  menuOpen = signal(false);
  particlesOptions: ISourceOptions = {
    background: {
      color: { value: "#f9fafb" } // Si el fondo de partículas va claro
      // color: { value: "#27272a" } // Si lo querés oscuro como fondo general
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: "#ff1f43" // main-color
      },
      links: {
        color: "#0b000c", // main-color para mantener armonía
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 2,
      },
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.7 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  };

  particlesOptions2: ISourceOptions = {
    background: {
      color: {
        value: getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim() || '#0b000a'
      }
    },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: 170,
        density: {
          enable: true,
          area: 1000
        }
      },
      color: {
        value: getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#dd0e7c'
      },
      links: {
        enable: true,
        distance: 140,
        color: getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#dd0e7c',
        opacity: 0.4,
        width: 1.2
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        speed: 1.6
      },
      opacity: {
        value: 0.7
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 2, max: 5 }
      },
      shadow: {
        enable: true,
        color: getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#dd0e7c',
        blur: 3
      }
    }
  };

  particlesInit = this._particlesInit.bind(this);

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
    this.menuOpen.set(!this.menuOpen());
  }

  private async _particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}
