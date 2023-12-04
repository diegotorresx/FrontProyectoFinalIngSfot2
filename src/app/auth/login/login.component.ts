import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string) {
    this.authService.login(username, password, (success) => {
      if (success) {
        this.router.navigate(['/ruta-protegida']);
      } else {
        // Manejar error de inicio de sesión
        // Por ejemplo, mostrar un mensaje de error al usuario
      }
    });
  }
}
