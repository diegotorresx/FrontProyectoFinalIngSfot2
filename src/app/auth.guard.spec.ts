import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        // Mock AuthService or provide a real implementation
      ]
    });
    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true for canActivate when user is logged in', () => {
    spyOn(authService as any, 'isLoggedIn').and.returnValue(true);
    expect(authGuard.canActivate()).toBe(true);
  });

  // Más pruebas aquí...
});
