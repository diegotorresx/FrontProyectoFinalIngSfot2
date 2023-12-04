import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // Inicialmente, el usuario no está autenticado

  constructor(private http: HttpClient) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // Retorna un observable para que los componentes puedan subscribirse
  }

  login(username: string, password: string, callback: (success: boolean) => void) {
    this.http.get<any[]>('https://localhost:7279/User').subscribe(users => {
      const user = users.find(u => u.email === username && u.password === password);
      if (user) {
        this.loggedIn.next(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', new Date().getTime().toString());
        callback(true);
      } else {
        this.loggedIn.next(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTime');
        callback(false);
      }
    }, error => {
      this.loggedIn.next(false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
      callback(false);
    });
  }

  logout() {
    this.loggedIn.next(false);
  }

  checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginTime = parseInt(localStorage.getItem('loginTime') || '0');
    const currentTime = new Date().getTime();

    if (isLoggedIn && currentTime - loginTime < 10 * 60 * 1000) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
    }
  }
}