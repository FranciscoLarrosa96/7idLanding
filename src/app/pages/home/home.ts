import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  challenges = [
    {
      icon: 'strategy',
      title: 'Falta de Estrategia',
      desc: 'Sin un rumbo claro, la tecnología es un gasto recurrente que no genera retorno, en lugar de ser una inversión clave.',
    },
    {
      icon: 'warning',
      title: 'Herramientas Obsoletas',
      desc: 'Sistemas legados que frenan el crecimiento operativo y la innovación, volviendo a la empresa menos competitiva.',
    },
    {
      icon: 'hub',
      title: 'Silos de Información',
      desc: 'Datos desconectados entre departamentos que impiden una visión global y la toma de decisiones basada en datos.',
    },
  ];

  services = [
    {
      title: 'CTO as a Service',
      desc: 'Liderazgo técnico estratégico sin los costos de una contratación a tiempo completo.',
    },
    {
      title: 'Auditoría IT',
      desc: 'Evaluación profunda de tus sistemas actuales para identificar riesgos y oportunidades.',
    },
    {
      title: 'Transformación Digital',
      desc: 'Roadmap personalizado para digitalizar procesos y mejorar la experiencia del cliente.',
    },
    {
      title: 'Desarrollo a Medida',
      desc: 'Software personalizado diseñado para tus necesidades específicas con escalabilidad total garantizada.',
    },
  ];
}
