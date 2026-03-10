import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  imports: [],
  styles: [
    `
      button {
        transition:
          opacity 0.3s ease,
          transform 0.2s ease;
      }
    `,
  ],
  template: `
    <button
      (click)="scrollToTop()"
      aria-label="Volver arriba"
      [style.opacity]="visible() ? '1' : '0'"
      [style.pointer-events]="visible() ? 'auto' : 'none'"
      class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  `,
})
export class ScrollToTop {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
