import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {
  showGestionOnline: boolean = false;
  showBackOffice: boolean = false;
  showGestionate = false;
  showFOL = false;
  showCOT1 = false;
  showCOT2 = false;

  teamMembers = [
    {
      name: 'Christian Roig',
      role: 'CEO & Founder',
      image: 'assets/img/colaboradores/christian.avif',
    },
    {
      name: 'Lucia Lopez Cerecedo',
      role: 'Responsable de Talento',
      image: 'assets/img/colaboradores/lucia.avif',
    },
    {
      name: 'Kevin Martinez',
      role: 'Fullstack Developer',
      image: 'assets/img/colaboradores/kevin.avif',
    },
    {
      name: 'Maria Emilia Tunesi',
      role: 'QA & Requirements Analyst',
      image: 'assets/img/colaboradores/emilia.avif',
    },
    {
      name: 'Juan Segundo Aramburu',
      role: 'QA Tester',
      image: 'assets/img/colaboradores/juanse.avif',
    },
    {
      name: 'Santiago Tapia',
      role: 'Requeriments Analyst',
      image: 'assets/img/colaboradores/santi.avif',
    },
    {
      name: 'Santiago Diaz Pace',
      role: 'Project Manager',
      image: 'assets/img/colaboradores/santiago.avif',
    },
    {
      name: 'Francisco Larrosa',
      role: 'Front End Developer',
      image: 'assets/img/colaboradores/fran.avif',
    },
    {
      name: 'Eliseo Villa',
      role: 'Backend Developer',
      image: 'assets/img/colaboradores/eliseo.avif',
    },
    {
      name: 'Bernardino Bonisconti',
      role: 'Project Manager',
      image: 'assets/img/colaboradores/bernardino.avif',
    },
    {
      name: 'Joaquin Barbieri',
      role: 'Backend Developer',
      image: 'assets/img/colaboradores/joaquin.avif',
    },
    {
      name: 'Ludmila Alvares',
      role: 'Administrative & Comercial',
      image: 'assets/img/colaboradores/ludmila.avif',
    },
    {
      name: 'Juan Diego Grela',
      role: 'Backend Developer',
      image: 'assets/img/colaboradores/juan.avif',
    },
    {
      name: 'Luca Mendoza',
      role: 'Frontend Developer',
      image: 'assets/img/colaboradores/luca.avif',
    },
  ];
}
