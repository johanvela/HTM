import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  id_usuario = '';
  contrasena = '';
  error: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.error = null;

    const data = {
      id_usuario: this.id_usuario,
      contrasena: this.contrasena
    };

    this.authService.login(data).subscribe({
      next: () => {
        this.router.navigate(['/store']);
      },
      error: err => {
        this.error = err.error?.error || 'Error al iniciar sesión';
      }
    });
  }
    navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
