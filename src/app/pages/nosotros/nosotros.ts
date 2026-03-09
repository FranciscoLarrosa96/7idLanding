import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  imports: [RouterLink, NgClass],
  templateUrl: './nosotros.html',
})
export class Nosotros {
  values = [
    {
      icon: 'psychology',
      title: 'Innovación Constante',
      desc: 'Buscamos siempre la última frontera tecnológica para ofrecer soluciones que den una ventaja competitiva real.',
      color: 'text-primary',
      bg: 'bg-primary/10 group-hover:bg-primary',
    },
    {
      icon: 'handshake',
      title: 'Compromiso Ético',
      desc: 'Transparencia y honestidad en cada etapa del proceso, construyendo relaciones de confianza a largo plazo.',
      color: 'text-accent',
      bg: 'bg-accent/10 group-hover:bg-accent',
    },
    {
      icon: 'ads_click',
      title: 'Resultados Tangibles',
      desc: 'No solo diseñamos bonito; diseñamos para convertir, vender y posicionar tu marca donde debe estar.',
      color: 'text-red-600',
      bg: 'bg-red-50 group-hover:bg-red-600',
    },
  ];

  team = [
    { name: 'Christian', role: 'Director General', img: 'assets/img/colaboradores/christian.avif' },
    { name: 'Francisco', role: 'Full Stack Developer', img: 'assets/img/colaboradores/fran.avif' },
    { name: 'Juan', role: 'Backend Engineer', img: 'assets/img/colaboradores/juan.avif' },
    { name: 'Juan Sebastián', role: 'Frontend Developer', img: 'assets/img/colaboradores/juanse.avif' },
    { name: 'Kevin', role: 'UX / UI Designer', img: 'assets/img/colaboradores/kevin.avif' },
    { name: 'Luca', role: 'Mobile Developer', img: 'assets/img/colaboradores/luca.avif' },
    { name: 'Lucía', role: 'Diseñadora', img: 'assets/img/colaboradores/lucia.avif' },
    { name: 'Emilia', role: 'Marketing Digital', img: 'assets/img/colaboradores/emilia.avif' },
    { name: 'Joaquín', role: 'DevOps Engineer', img: 'assets/img/colaboradores/joaquin.avif' },
    { name: 'Bernardino', role: 'Data Engineer', img: 'assets/img/colaboradores/bernardino.avif' },
    { name: 'Eliseo', role: 'QA Engineer', img: 'assets/img/colaboradores/eliseo.avif' },
    { name: 'Ludmila', role: 'Project Manager', img: 'assets/img/colaboradores/ludmila.avif' },
    { name: 'Santi', role: 'Cloud Architect', img: 'assets/img/colaboradores/santi.avif' },
    { name: 'Santiago', role: 'Cybersecurity', img: 'assets/img/colaboradores/santiago.avif' },
  ];
}
