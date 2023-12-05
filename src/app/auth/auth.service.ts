import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // Inicialmente, el usuario no está autenticado

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // Retorna un observable para que los componentes puedan subscribirse
  }

  login(username: string, password: string) {
    const serverCredentials = {
      username: 'user',
      password: '12345678'
    };
    return of(serverCredentials).pipe(
      tap((res: any) => {
        if (
          username === serverCredentials.username &&
          password === serverCredentials.password
        ) {
          localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
          localStorage.setItem('idUsuario', serverCredentials.username);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('loginTime', new Date().getTime().toString());
        } else {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('loginTime');
          throw new Error('Credenciales inválidas');
        }
      })
    );
  }

  logout() {
    this.loggedIn.next(false);
  }

  checkAuthentication() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginTime = parseInt(localStorage.getItem('loginTime') || '0');
    const currentTime = new Date().getTime();

    return of({}).pipe(
      map(() => {
        if (isLoggedIn && currentTime - loginTime < 10 * 60 * 1000) {
          return true;
        } else {
          throw new Error('no tiene sesión');
        }
      }),
      catchError((err) => {

        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTime');
        return of(false);
      })
    );
  }
}