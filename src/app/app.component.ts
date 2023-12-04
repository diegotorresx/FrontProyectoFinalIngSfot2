import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontAngularProyect';
  @ViewChild('sidenav') sidenav: MatSidenav = null!;
  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.authService.checkAuthentication();
  }

  abrirLogin(): void {
    this.dialog.open(LoginComponent, {
      width: '400px',
      // Puedes agregar más opciones de configuración aquí si es necesario
    });
  }
}
