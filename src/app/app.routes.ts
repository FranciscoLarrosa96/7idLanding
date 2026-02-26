import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/inicio/inicio.component').then(
            (m) => m.InicioComponent,
          ),
      },
      {
        path: 'nosotros',
        loadComponent: () =>
          import('./pages/nosotros/nosotros.component').then(
            (m) => m.NosotrosComponent,
          ),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./pages/servicios/servicios.component').then(
            (m) => m.ServiciosComponent,
          ),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/contacto/contacto.component').then(
            (m) => m.ContactoComponent,
          ),
      },
      { path: '**', redirectTo: 'inicio' },
    ],
  },
];
