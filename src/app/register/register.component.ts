import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  usuario = '';
  correo = '';
  password = '';
  error: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí podrías llamar a tu backend con HttpClient
    if (this.usuario && this.correo && this.password) {
      console.log('Registro enviado:', this.usuario, this.correo, this.password);
      this.router.navigate(['/login']);
    } else {
      this.error = 'Todos los campos son obligatorios';
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
