import {
  afterNextRender,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit {
  // Stats animadas
  linesOfCode = signal(0);
  projectsCompleted = signal(0);
  yearsOfExperience = signal(0);
  happyClients = signal(0);
  coffeeCups = signal(0);
  bugsFixed = signal(0);
  deployments = signal(0);
  pizzaSlices = signal(0);

  private baseDate = new Date('2026-01-29');

  @ViewChild('capabilitiesVideo')
  capabilitiesVideo!: ElementRef<HTMLVideoElement>;

  @ViewChild('ctaVideo')
  ctaVideo!: ElementRef<HTMLVideoElement>;

  constructor() {
    afterNextRender(() => {
      this.ensureVideosPlay();
    });
  }

  ngOnInit(): void {
    this.setupStatsAnimation();
  }

  private getDaysSinceBase(): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - this.baseDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  private getTargetLinesOfCode(): number {
    const days = this.getDaysSinceBase();
    return 3.2 + days * 0.00002;
  }

  private getTargetCoffeeCups(): number {
    const days = this.getDaysSinceBase();
    return 8.5 + days * 0.008;
  }

  ensureVideosPlay(): void {
    const attemptPlay = (video: HTMLVideoElement, name: string) => {
      video.play().catch(() => {
        const retry = () => video.play().catch(() => {});
        document.addEventListener('mousemove', retry, {
          once: true,
          passive: true,
        });
        document.addEventListener('scroll', retry, {
          once: true,
          passive: true,
        });
        document.addEventListener('click', retry, { once: true });
        document.addEventListener('touchstart', retry, {
          once: true,
          passive: true,
        });
      });
    };

    setTimeout(() => {
      if (this.capabilitiesVideo?.nativeElement) {
        const v = this.capabilitiesVideo.nativeElement;
        v.addEventListener('loadeddata', () => attemptPlay(v, 'capabilities'), {
          once: true,
        });
        v.addEventListener('canplay', () => attemptPlay(v, 'capabilities'), {
          once: true,
        });
        attemptPlay(v, 'capabilities');
      }
      if (this.ctaVideo?.nativeElement) {
        const v = this.ctaVideo.nativeElement;
        v.addEventListener('loadeddata', () => attemptPlay(v, 'cta'), {
          once: true,
        });
        v.addEventListener('canplay', () => attemptPlay(v, 'cta'), {
          once: true,
        });
        attemptPlay(v, 'cta');
      }
    }, 100);
  }

  setupStatsAnimation(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    setTimeout(() => {
      const statsSection = document.getElementById('estadisticas');
      if (statsSection) {
        observer.observe(statsSection);
      }
    }, 500);
  }

  animateStats(): void {
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
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOut * 10) / 10;
        callback(current);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

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
}
