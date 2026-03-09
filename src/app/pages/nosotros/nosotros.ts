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

  teamMembers = [
    { name: 'Christian Roig',        role: 'CEO & Founder',               image: 'assets/img/colaboradores/christian.avif' },
    { name: 'Lucia Lopez Cerecedo',  role: 'Responsable de Talento',      image: 'assets/img/colaboradores/lucia.avif' },
    { name: 'Kevin Martinez',        role: 'Fullstack Developer',         image: 'assets/img/colaboradores/kevin.avif' },
    { name: 'Maria Emilia Tunesi',   role: 'QA & Requirements Analyst',   image: 'assets/img/colaboradores/emilia.avif' },
    { name: 'Juan Segundo Aramburu', role: 'QA Tester',                   image: 'assets/img/colaboradores/juanse.avif' },
    { name: 'Santiago Tapia',        role: 'Requirements Analyst',        image: 'assets/img/colaboradores/santi.avif' },
    { name: 'Santiago Diaz Pace',    role: 'Project Manager',             image: 'assets/img/colaboradores/santiago.avif' },
    { name: 'Francisco Larrosa',     role: 'Front End Developer',         image: 'assets/img/colaboradores/fran.avif' },
    { name: 'Eliseo Villa',          role: 'Backend Developer',           image: 'assets/img/colaboradores/eliseo.avif' },
    { name: 'Bernardino Bonisconti', role: 'Project Manager',             image: 'assets/img/colaboradores/bernardino.avif' },
    { name: 'Joaquin Barbieri',      role: 'Backend Developer',           image: 'assets/img/colaboradores/joaquin.avif' },
    { name: 'Ludmila Alvares',       role: 'Administrative & Comercial',  image: 'assets/img/colaboradores/ludmila.avif' },
    { name: 'Juan Diego Grela',      role: 'Backend Developer',           image: 'assets/img/colaboradores/juan.avif' },
    { name: 'Luca Mendoza',          role: 'Frontend Developer',          image: 'assets/img/colaboradores/luca.avif' },
  ];
}
