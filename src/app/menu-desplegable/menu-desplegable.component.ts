import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.css']
})
export class MenuDesplegableComponent implements OnInit, OnDestroy {
  private authSubscription!: Subscription;
  usuarioAutenticado: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (isLoggedIn) => {
        this.usuarioAutenticado = isLoggedIn;
      }
    );

    // Verifica inmediatamente el estado de la sesión al cargar el componente
    this.authService.checkAuthentication();
  }
  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
