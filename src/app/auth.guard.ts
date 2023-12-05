import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth/auth.service';
 
export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
 
  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigateByUrl('/auth/login');
      }
    })
  );
};
