import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  password = '';
  error: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.usuario === 'admin' && this.password === '1234') {
      // Autenticación exitosa (esto es un ejemplo)
      this.router.navigate(['/usuarios']); // o la ruta que quieras mostrar después
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }

    navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
