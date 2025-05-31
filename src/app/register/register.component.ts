import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  id_usuario = '';
  correo = '';
  contrasena = '';
  error: string | null = null;

  constructor(private router: Router, private authService:AuthService) {}

 onSubmit() {
  if (this.id_usuario && this.correo && this.contrasena) {
    const data = {
      id_usuario: this.id_usuario,
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.authService.register(data).subscribe({
      next: () => {
        alert('¡Registro exitoso! Redirigiendo a inicio de sesión.');
        this.router.navigate(['/login']);
      },
      error: err => {
        this.error = err.error?.error || 'Error al registrar';
      }
    });
  } else {
    this.error = 'Todos los campos son obligatorios';
  }
}


  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
