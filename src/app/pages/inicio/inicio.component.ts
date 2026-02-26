import {
  afterNextRender,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {
    afterNextRender(() => {
      this.ensureVideoPlays();
    });
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  ensureVideoPlays(): void {
    setTimeout(() => {
      if (!this.heroVideo?.nativeElement) return;
      const video = this.heroVideo.nativeElement;

      const attemptPlay = () => {
        video.play().catch(() => {
          const retry = () => {
            video.play().catch(() => {});
          };
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

      video.addEventListener('loadeddata', attemptPlay, { once: true });
      video.addEventListener('canplay', attemptPlay, { once: true });
      attemptPlay();
    }, 100);
  }
}
