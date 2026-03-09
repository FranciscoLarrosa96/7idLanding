import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink, NgClass],
  templateUrl: './servicios.html',
})
export class Servicios {
  services = [
    {
      icon: 'corporate_fare',
      title: 'Liderazgo y Gestión',
      color: 'text-primary',
      bg: 'bg-primary/10 group-hover:bg-primary',
      items: ['Planificación Agile', 'Optimización de Procesos'],
      desc: 'Dirección estratégica de proyectos IT con enfoque en resultados. Gestión eficiente de recursos y tiempos.',
    },
    {
      icon: 'terminal',
      title: 'Desarrollo a Medida',
      color: 'text-accent',
      bg: 'bg-accent/10 group-hover:bg-accent',
      items: ['Cloud Native Apps', 'Microservicios'],
      desc: 'Software personalizado diseñado para sus necesidades específicas con escalabilidad total garantizada.',
    },
    {
      icon: 'hub',
      title: 'Integración de Sistemas',
      color: 'text-primary',
      bg: 'bg-primary/10 group-hover:bg-primary',
      items: ['API Management', 'Legado & Moderno'],
      desc: 'Conectividad fluida entre plataformas existentes mediante arquitectura robusta y segura.',
    },
    {
      icon: 'fact_check',
      title: 'QA y Soporte',
      color: 'text-accent',
      bg: 'bg-accent/10 group-hover:bg-accent',
      items: ['Testing Automatizado', 'Mantenimiento 24/7'],
      desc: 'Calidad garantizada y asistencia continua para asegurar la estabilidad de su infraestructura.',
    },
  ];

  stats = [
    { value: '15+', label: 'Años de Experiencia', desc: 'Trayectoria sólida en el sector tecnológico regional.', color: 'text-accent' },
    { value: '200+', label: 'Proyectos Exitosos', desc: 'Soluciones implementadas con 100% de satisfacción.', color: 'text-primary' },
    { value: '24/7', label: 'Soporte Local', desc: 'Acompañamiento constante y personalizado.', color: 'text-accent' },
  ];
}
