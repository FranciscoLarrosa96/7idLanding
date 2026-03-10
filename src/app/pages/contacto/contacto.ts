import { Component, signal, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
})
export class Contacto {
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    empresa: [''],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted = signal(false);
  loading = signal(false);

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    // Simulate send
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.contactForm.reset();
    }, 1500);
  }

  get f() {
    return this.contactForm.controls;
  }

  contactInfo = [
    { icon: 'mail', label: 'Email', value: 'contacto@sieteideas.com.ar' },
    { icon: 'call', label: 'Teléfono', value: '+54 9 2494 28-9033' },
    {
      icon: 'location_on',
      label: 'Ubicación',
      value: 'Tandil, Buenos Aires, Argentina',
    },
    { icon: 'schedule', label: 'Horario', value: 'Lun – Vie, 9:00 – 18:00' },
  ];
}
