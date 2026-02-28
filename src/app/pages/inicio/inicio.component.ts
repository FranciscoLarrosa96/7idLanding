import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('capVideo') capVideo!: ElementRef<HTMLVideoElement>;

  senales = [
    'Los sistemas no se integran correctamente.',
    'No hay un IT Leader claro.',
    'Los proveedores trabajan sin coordinación.',
    'La infraestructura creció sin planificación.',
    'Los backups existen, pero no se validan.',
    'Los reportes no siempre coinciden.',
    'La dirección no tiene visibilidad real sobre riesgos tecnológicos.',
  ];

  cambios = [
    'Las decisiones se toman con criterio.',
    'Los riesgos se identifican antes de que impacten.',
    'Los sistemas trabajan integrados.',
    'La información se vuelve confiable.',
    'La operación reduce fricción.',
    'Los proveedores trabajan coordinados.',
  ];

  serviciosHome = [
    {
      icon: 'fa-compass',
      titulo: 'Liderazgo y Gestión Tecnológica',
      descripcion:
        'Acompañamos a la dirección a ordenar el área IT, coordinar proveedores y definir la hoja de ruta.',
    },
    {
      icon: 'fa-code',
      titulo: 'Desarrollo de Software a Medida',
      descripcion:
        'Creamos soluciones específicas cuando el negocio lo necesita.',
    },
    {
      icon: 'fa-plug',
      titulo: 'Integración de Sistemas',
      descripcion:
        'Conectamos plataformas para que la información fluya de manera confiable.',
    },
    {
      icon: 'fa-check-double',
      titulo: 'QA y Soporte Tecnológico',
      descripcion:
        'Aseguramos calidad, estabilidad y continuidad operativa.',
    },
  ];

  constructor(private router: Router) {
    afterNextRender(() => {
      this.ensureVideosPlay();
    });
  }

  ensureVideosPlay(): void {
    const videos = [this.heroVideo, this.capVideo];
    setTimeout(() => {
      videos.forEach((ref) => {
        if (!ref?.nativeElement) return;
        const video = ref.nativeElement;
        const retry = () => video.play().catch(() => {});
        video.addEventListener('canplay', retry, { once: true });
        video.play().catch(() => {
          document.addEventListener('mousemove', retry, { once: true, passive: true });
          document.addEventListener('scroll', retry, { once: true, passive: true });
          document.addEventListener('click', retry, { once: true });
          document.addEventListener('touchstart', retry, { once: true, passive: true });
        });
      });
    }, 100);
  }
}
