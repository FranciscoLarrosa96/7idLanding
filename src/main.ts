import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

function setupScrollAnimations(): void {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  const observe = () =>
    document
      .querySelectorAll<HTMLElement>('.scroll-anim:not(.is-visible)')
      .forEach((el) => io.observe(el));

  // Catch elements added by lazy-loaded routes
  new MutationObserver(observe).observe(document.body, {
    childList: true,
    subtree: true,
  });

  observe();
}

bootstrapApplication(App, appConfig)
  .then(() => setupScrollAnimations())
  .catch((err) => console.error(err));
