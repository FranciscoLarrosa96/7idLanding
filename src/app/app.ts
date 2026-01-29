import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import * as AOS from 'aos';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';
import { NgParticlesModule } from 'ng-particles';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgParticlesModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = '7 Ideas - Soluciones Digitales y Desarrollo de Software';
  showGestionOnline: boolean = false;
  showBackOffice: boolean = false;
  showGestionate = false;
  showFOL = false;
  menuOpen = signal(false);
  activeSection = signal('inicio');
  showTransition = signal(false);
  particlesOptions: ISourceOptions = {
    background: {
      color: { value: '#f9fafb' }, // Si el fondo de partículas va claro
      // color: { value: "#27272a" } // Si lo querés oscuro como fondo general
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#ff1f43', // main-color
      },
      links: {
        color: '#0b000c', // main-color para mantener armonía
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        speed: 2,
      },
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.7 },
      shape: { type: 'circle' },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  };

  particlesOptions2: ISourceOptions = {
    background: {
      color: {
        value:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--background-color')
            .trim() || '#0b000a',
      },
    },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: 170,
        density: {
          enable: true,
          area: 1000,
        },
      },
      color: {
        value:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color')
            .trim() || '#dd0e7c',
      },
      links: {
        enable: true,
        distance: 140,
        color:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color')
            .trim() || '#dd0e7c',
        opacity: 0.4,
        width: 1.2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        speed: 1.6,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 5 },
      },
      shadow: {
        enable: true,
        color:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color')
            .trim() || '#dd0e7c',
        blur: 3,
      },
    },
  };
  particlesOptionsGlow: ISourceOptions = {
    background: {
      color: {
        value:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--background-color')
            .trim() || '#0b000a',
      },
    },
    fpsLimit: 60,
    detectRetina: true,
    // interactivity: {
    //   events: {
    //     onHover: {
    //       enable: true,
    //       mode: 'bubble'
    //     },
    //     resize: true
    //   },
    //   modes: {
    //     bubble: {
    //       distance: 120,
    //       size: 8,
    //       duration: 2,
    //       opacity: 1,
    //       color:
    //         getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() ||
    //         '#dd0e7c'
    //     }
    //   }
    // },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          area: 1000,
        },
      },
      color: {
        value:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color')
            .trim() || '#dd0e7c',
      },
      links: {
        enable: true,
        distance: 140,
        color:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color')
            .trim() || '#dd0e7c',
        opacity: 0.35,
        width: 1.1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        speed: 1.4,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 5 },
      },
      shadow: {
        enable: true,
        color:
          getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color')
            .trim() || '#dd0e7c',
        blur: 12,
      },
    },
  };

  particlesInit = this._particlesInit.bind(this);
  isMobile = window.innerWidth <= 768;
  contactForm: FormGroup;
  selectedFile: File | null = null;

  @ViewChild('formElement') formElement!: ElementRef<HTMLFormElement>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });

    // ✨ Forma moderna de Angular 19+ para ejecutar código después del render
    afterNextRender(() => {
      this.setupActiveSection();

      const btn = document.getElementById('menuToggle');
      const menu = document.getElementById('mobileMenu');
      btn?.addEventListener('click', () => {
        menu?.classList.toggle('hidden');
      });
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });

    this.setParticlesOptions();
    this.setupSmoothScroll();
  }

  setupActiveSection(): void {
    // Esperar un poco para asegurar que el DOM esté listo
    const sections = document.querySelectorAll('section[id]');

    if (sections.length === 0) {
      console.warn('No se encontraron secciones con id');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px -50% 0px',
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  setupSmoothScroll(): void {
    document.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');

      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          // Mostrar animación de transición
          this.showTransition.set(true);

          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
              if (this.menuOpen()) {
                this.menuOpen.set(false);
              }

              // Ocultar animación después del scroll
              setTimeout(() => {
                this.showTransition.set(false);
              }, 800);
            }
          }, 400);
        }
      }
    });
  }

  onParticlesLoaded(container: Container): void {
    const hero = document.getElementById('inicio');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        if (visible) {
          container.play();
        } else {
          container.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  private async _particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

  setParticlesOptions() {
    const color =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--main-color')
        .trim() || '#dd0e7c';
    const background =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--background-color')
        .trim() || '#0b000a';

    this.particlesOptionsGlow = {
      background: {
        color: { value: background },
      },
      detectRetina: true,
      particles: {
        number: {
          value: this.isMobile ? 120 : 200,
          density: { enable: true, area: 1000 },
        },
        color: { value: color },
        links: {
          enable: true,
          distance: 140,
          color: color,
          opacity: 0.35,
          width: 1.1,
        },
        collisions: {
          enable: !this.isMobile,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          speed: this.isMobile ? 0.8 : 1.4,
        },
        opacity: { value: this.isMobile ? 0.7 : 0.8 },
        shape: { type: 'circle' },
        size: { value: { min: 2, max: this.isMobile ? 5 : 5 } },
      },
    };
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  /**
   * Envia un correo electrónico utilizando EmailJS.
   * @param event
   */

  sendEmail(): void {
    if (this.contactForm.invalid || !this.selectedFile) return;

    const formData = new FormData(this.formElement.nativeElement);
    formData.append('cv', this.selectedFile);
    for (const [key, value] of formData.entries()) {
    }

    // emailjs
    //   .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.formElement.nativeElement, 'YOUR_PUBLIC_KEY')
    //   .then(() => {

    //     this.contactForm.reset();
    //     this.selectedFile = null;
    //   })
    //   .catch((error) => {
    //     console.error('❌ Error al enviar:', error);
    //   });
  }
}
