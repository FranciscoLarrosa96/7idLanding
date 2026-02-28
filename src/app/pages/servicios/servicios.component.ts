import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent {
  @ViewChild('capVideo') capVideo!: ElementRef<HTMLVideoElement>;

  servicios = [
    {
      icon: 'fa-compass',
      titulo: 'Liderazgo y Gestión Tecnológica',
      descripcion:
        'Muchas empresas crecen tecnológicamente sin que nadie lleve el timón. Los proveedores trabajan por separado, los sistemas se multiplican sin criterio y la dirección pierde visibilidad sobre lo que realmente ocurre.',
      detalle:
        'Asumimos el rol de IT Leader externo: ordenamos el área, coordinamos a todos los proveedores desde un único punto, y definimos una hoja de ruta tecnológica alineada con los objetivos del negocio.',
    },
    {
      icon: 'fa-code',
      titulo: 'Desarrollo de Software a Medida',
      descripcion:
        'No siempre existe una herramienta estándar que encaje con cómo trabaja tu empresa. Cuando los procesos son específicos, el software genérico genera fricción.',
      detalle:
        'Desarrollamos soluciones pensadas para tu operación real: integraciones entre sistemas, automatizaciones, módulos a medida o aplicaciones completas. Código limpio, entregable y mantenible.',
    },
    {
      icon: 'fa-plug',
      titulo: 'Integración de Sistemas',
      descripcion:
        'La información que se carga dos veces, los reportes que no coinciden y los errores manuales son síntomas de sistemas que no hablan entre sí.',
      detalle:
        'Conectamos plataformas, ERP, CRM y aplicaciones para que la información fluya de manera automática y confiable. Sin duplicación, sin fricción, sin errores de carga manual.',
    },
    {
      icon: 'fa-check-double',
      titulo: 'QA y Soporte Tecnológico',
      descripcion:
        'La estabilidad operativa no se improvisa. Un sistema que falla en el momento equivocado tiene un costo que va más allá de lo técnico.',
      detalle:
        'Implementamos pruebas, validaciones y procesos de soporte que aseguran calidad antes del impacto. Acompañamos la operación para que los sistemas sean confiables, no una fuente de preocupación.',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.ensureVideoPlays();
    });
  }

  ensureVideoPlays(): void {
    setTimeout(() => {
      if (!this.capVideo?.nativeElement) return;
      const video = this.capVideo.nativeElement;
      const retry = () => video.play().catch(() => {});
      video.addEventListener('canplay', retry, { once: true });
      video.play().catch(() => {
        document.addEventListener('mousemove', retry, { once: true, passive: true });
        document.addEventListener('scroll', retry, { once: true, passive: true });
        document.addEventListener('click', retry, { once: true });
        document.addEventListener('touchstart', retry, { once: true, passive: true });
      });
    }, 100);
  }
}
