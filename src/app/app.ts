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
  showCOT1 = false;
  showCOT2 = false;
  menuOpen = signal(false);
  activeSection = signal('inicio');
  showTransition = signal(false);

  // Estadísticas animadas
  linesOfCode = signal(0);
  projectsCompleted = signal(0);
  yearsOfExperience = signal(0);
  happyClients = signal(0);
  coffeeCups = signal(0);
  bugsFixed = signal(0);
  deployments = signal(0);
  pizzaSlices = signal(0);

  // Fecha base para cálculos incrementales (29 enero 2026)
  private baseDate = new Date('2026-01-29');

  private getDaysSinceBase(): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - this.baseDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  private getTargetLinesOfCode(): number {
    // Base: 3.2M + 20 líneas por día = 0.00002M por día
    const days = this.getDaysSinceBase();
    return 3.2 + days * 0.00002;
  }

  private getTargetCoffeeCups(): number {
    // Base: 8.5K + 8 cafés por día = 0.008K por día
    const days = this.getDaysSinceBase();
    return 8.5 + days * 0.008;
  }

  // Carousel del equipo
  currentIndex = signal(0);
  flippedCards = signal<Set<number>>(new Set()); // Trackear cards flippeadas en mobile
  isDragging = false;
  startX = 0;
  currentX = 0;
  dragThreshold = 50; // Píxeles mínimos para cambiar de slide

  @ViewChild('carouselContainer')
  carouselContainer!: ElementRef<HTMLDivElement>;

  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  @ViewChild('ctaVideo')
  ctaVideo!: ElementRef<HTMLVideoElement>;

  @ViewChild('capabilitiesVideo')
  capabilitiesVideo!: ElementRef<HTMLVideoElement>;

  teamMembers = [
    {
      name: 'Christian Roig',
      role: 'CEO & Founder',
      image: 'assets/img/colaboradores/christian.avif',
    },
    {
      name: 'Lucia Lopez Cerecedo',
      role: 'Responsable de Talento',
      image: 'assets/img/colaboradores/lucia.avif',
    },
    {
      name: 'Kevin Martinez',
      role: 'Fullstack Developer',
      image: 'assets/img/colaboradores/kevin.avif',
    },
    {
      name: 'Maria Emilia Tunesi',
      role: 'QA & Requirements Analyst',
      image: 'assets/img/colaboradores/emilia.avif',
    },
    {
      name: 'Juan Segundo Aramburu',
      role: 'QA Tester',
      image: 'assets/img/colaboradores/juanse.avif',
    },
    {
      name: 'Santiago Tapia',
      role: 'Requeriments Analyst',
      image: 'assets/img/colaboradores/santi.avif',
    },
    {
      name: 'Santiago Diaz Pace',
      role: 'Project Manager',
      image: 'assets/img/colaboradores/santiago.avif',
    },
    {
      name: 'Francisco Larrosa',
      role: 'Front End Developer',
      image: 'assets/img/colaboradores/fran.avif',
    },
    {
      name: 'Eliseo Villa',
      role: 'Backend Developer',
      image: 'assets/img/colaboradores/eliseo.avif',
    },
    {
      name: 'Bernardino Bonisconti',
      role: 'Project Manager',
      image: 'assets/img/colaboradores/bernardino.avif',
    },
    {
      name: 'Joaquin Barbieri',
      role: 'Backend Developer',
      image: 'assets/img/colaboradores/joaquin.avif',
    },
    {
      name: 'Ludmila Alvares',
      role: 'Administrative & Comercial',
      image: 'assets/img/colaboradores/ludmila.avif',
    },
    {
      name: 'Juan Diego Grela',
      role: 'Backend Developer',
      image: 'assets/img/colaboradores/juan.avif',
    },
    {
      name: 'Luca Mendoza',
      role: 'Frontend Developer',
      image: 'assets/img/colaboradores/luca.avif',
    },
    // {
    //   name: 'Nicolás Ríos',
    //   role: 'Security Specialist',
    //   image: 'assets/preview7id.avif',
    // },
    // {
    //   name: 'Lucía Navarro',
    //   role: 'Product Owner',
    //   image: 'assets/preview7id.avif',
    // },
    // {
    //   name: 'Fernando Sosa',
    //   role: 'AI Developer',
    //   image: 'assets/preview7id.avif',
    // },
    // {
    //   name: 'Daniela Medina',
    //   role: 'Support Engineer',
    //   image: 'assets/preview7id.avif',
    // },
  ];
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
      this.ensureVideosPlay();

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

  ensureVideosPlay(): void {
    // Forzar reproducción de videos de fondo con múltiples estrategias
    const attemptPlay = (video: HTMLVideoElement, name: string) => {
      video.play().catch((error) => {
        console.log(`${name} autoplay blocked, esperando interacción...`);

        // Estrategia 1: Intentar con cualquier movimiento del mouse
        const onMouseMove = () => {
          video.play().catch(() => {});
          document.removeEventListener('mousemove', onMouseMove);
        };
        document.addEventListener('mousemove', onMouseMove, {
          once: true,
          passive: true,
        });

        // Estrategia 2: Intentar con scroll
        const onScroll = () => {
          video.play().catch(() => {});
          document.removeEventListener('scroll', onScroll);
        };
        document.addEventListener('scroll', onScroll, {
          once: true,
          passive: true,
        });

        // Estrategia 3: Intentar con click (fallback)
        const onClick = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', onClick);
        };
        document.addEventListener('click', onClick, { once: true });

        // Estrategia 4: Intentar con touchstart para móviles
        const onTouch = () => {
          video.play().catch(() => {});
          document.removeEventListener('touchstart', onTouch);
        };
        document.addEventListener('touchstart', onTouch, {
          once: true,
          passive: true,
        });
      });
    };

    setTimeout(() => {
      if (this.heroVideo?.nativeElement) {
        const video = this.heroVideo.nativeElement;

        // Intentar reproducir cuando el video esté listo
        video.addEventListener(
          'loadeddata',
          () => attemptPlay(video, 'Hero video'),
          { once: true },
        );
        video.addEventListener(
          'canplay',
          () => attemptPlay(video, 'Hero video'),
          { once: true },
        );

        // Intentar inmediatamente
        attemptPlay(video, 'Hero video');
      }

      if (this.ctaVideo?.nativeElement) {
        const video = this.ctaVideo.nativeElement;

        // Intentar reproducir cuando el video esté listo
        video.addEventListener(
          'loadeddata',
          () => attemptPlay(video, 'CTA video'),
          { once: true },
        );
        video.addEventListener(
          'canplay',
          () => attemptPlay(video, 'CTA video'),
          { once: true },
        );

        // Intentar inmediatamente
        attemptPlay(video, 'CTA video');
      }

      if (this.capabilitiesVideo?.nativeElement) {
        const video = this.capabilitiesVideo.nativeElement;

        // Intentar reproducir cuando el video esté listo
        video.addEventListener(
          'loadeddata',
          () => attemptPlay(video, 'Capabilities video'),
          { once: true },
        );
        video.addEventListener(
          'canplay',
          () => attemptPlay(video, 'Capabilities video'),
          { once: true },
        );

        // Intentar inmediatamente
        attemptPlay(video, 'Capabilities video');
      }

      // Estrategia adicional: cuando la página sea visible
      if (document.visibilityState === 'visible') {
        setTimeout(() => {
          this.heroVideo?.nativeElement?.play().catch(() => {});
          this.ctaVideo?.nativeElement?.play().catch(() => {});
          this.capabilitiesVideo?.nativeElement?.play().catch(() => {});
        }, 300);
      }
    }, 100);
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

    // Animar estadísticas cuando sean visibles
    this.setupStatsAnimation();
  }

  setupStatsAnimation(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateStats();
            observer.disconnect(); // Solo animar una vez
          }
        });
      },
      { threshold: 0.1 },
    );

    // Esperar a que el DOM esté listo
    setTimeout(() => {
      const statsSection = document.getElementById('estadisticas');
      if (statsSection) {
        observer.observe(statsSection);
      }
    }, 1000);
  }

  animateStats(): void {
    // Función para animar un número
    const animateValue = (
      start: number,
      end: number,
      duration: number,
      callback: (value: number) => void,
    ) => {
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out effect
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOut * 10) / 10;

        callback(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    // Animar cada estadística (duraciones más lentas)
    const targetLines = this.getTargetLinesOfCode();
    const targetCoffee = this.getTargetCoffeeCups();

    animateValue(0, targetLines, 3500, (val) => this.linesOfCode.set(val));
    animateValue(0, 50, 3500, (val) => this.projectsCompleted.set(val));
    animateValue(0, 22, 3500, (val) => this.yearsOfExperience.set(val));
    animateValue(0, 30, 3500, (val) => this.happyClients.set(val));
    animateValue(0, targetCoffee, 4000, (val) => this.coffeeCups.set(val));
    animateValue(0, 12.3, 4000, (val) => this.bugsFixed.set(val));
    animateValue(0, 3.2, 4000, (val) => this.deployments.set(val));
    animateValue(0, 4.7, 4000, (val) => this.pizzaSlices.set(val));
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.showTransition.set(true);

      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        if (this.menuOpen()) {
          this.menuOpen.set(false);
        }

        setTimeout(() => {
          this.showTransition.set(false);
        }, 800);
      }, 100);
    }
  }

  nextSlide() {
    this.currentIndex.set((this.currentIndex() + 1) % this.teamMembers.length);
  }

  prevSlide() {
    this.currentIndex.set(
      (this.currentIndex() - 1 + this.teamMembers.length) %
        this.teamMembers.length,
    );
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  getVisibleCards() {
    const totalCards = this.teamMembers.length;
    const currentIdx = this.currentIndex();
    const isMobile = window.innerWidth <= 768;

    const result = [];

    if (isMobile) {
      // En mobile mostrar 3 cards: izquierda (semi-transparente), centro (principal), derecha (semi-transparente)
      for (let i = -1; i <= 1; i++) {
        const index = (currentIdx + i + totalCards) % totalCards;
        result.push({
          member: this.teamMembers[index],
          position: i,
          index: index,
        });
      }
    } else {
      // En desktop mostrar 3 cards (1 izq, centro, 1 der)
      for (let i = -1; i <= 1; i++) {
        const index = (currentIdx + i + totalCards) % totalCards;
        result.push({
          member: this.teamMembers[index],
          position: i,
          index: index,
        });
      }
    }
    return result;
  }

  toggleCardFlip(index: number, event: Event) {
    // Solo en mobile
    if (window.innerWidth > 768) return;

    event.stopPropagation();
    const flipped = new Set(this.flippedCards());

    if (flipped.has(index)) {
      flipped.delete(index);
    } else {
      flipped.add(index);
    }

    this.flippedCards.set(flipped);
  }

  isCardFlipped(index: number): boolean {
    return this.flippedCards().has(index);
  }
  // Drag handlers para mouse
  onDragStart(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.currentX = event.clientX;
    event.preventDefault();
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.currentX = event.clientX;
  }

  onDragEnd(event: MouseEvent) {
    if (!this.isDragging) return;

    const deltaX = this.currentX - this.startX;

    if (Math.abs(deltaX) > this.dragThreshold) {
      if (deltaX > 0) {
        // Arrastró hacia la derecha = slide anterior
        this.prevSlide();
      } else {
        // Arrastró hacia la izquierda = slide siguiente
        this.nextSlide();
      }
    }

    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
  }

  // Touch handlers para móviles
  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].clientX;
    this.currentX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;

    const deltaX = this.currentX - this.startX;

    if (Math.abs(deltaX) > this.dragThreshold) {
      if (deltaX > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }

    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
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
