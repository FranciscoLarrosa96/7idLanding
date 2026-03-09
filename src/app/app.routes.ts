import { Routes } from '@angular/router';

export const routes: Routes = [
  // Blog detail is a full standalone page (no nav/footer wrapper)
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./pages/blog-detail/blog-detail').then(m => m.BlogDetail),
    title: 'Blog | 7iDeas',
  },

  // Main layout wraps all other pages
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: '7iDeas – Liderazgo Tecnológico Estratégico',
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./pages/servicios/servicios').then(m => m.Servicios),
        title: 'Servicios | 7iDeas',
      },
      {
        path: 'nosotros',
        loadComponent: () =>
          import('./pages/nosotros/nosotros').then(m => m.Nosotros),
        title: 'Nosotros | 7iDeas',
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/contacto/contacto').then(m => m.Contacto),
        title: 'Contacto | 7iDeas',
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog').then(m => m.Blog),
        title: 'Blog | 7iDeas',
      },
      // Wildcard redirect
      { path: '**', redirectTo: '' },
    ],
  },
];
