import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialDeCasosService {
  private apiUrl = 'https://uaj93qz5m8.execute-api.us-east-2.amazonaws.com/Historico';

  constructor(private http: HttpClient) { }

  obtenerCasos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}