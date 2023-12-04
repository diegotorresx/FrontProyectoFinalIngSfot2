import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantaInterface } from './planta-interface'
import { Observable } from 'rxjs';
import { HumityData } from './humity-data'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private plantUrl = 'https://uaj93qz5m8.execute-api.us-east-2.amazonaws.com/Plantas?';
  private humidityUrl = 'https://uaj93qz5m8.execute-api.us-east-2.amazonaws.com/Historico?ID_PLANTA=';

  constructor(private http: HttpClient) { }

  getPlantIds(): Observable<PlantaInterface[]> {
    return this.http.get<PlantaInterface[]>(this.plantUrl);
  }

  getHumidityData(plantId: string): Observable<HumityData[]> {
    return this.http.get<HumityData[]>(`${this.humidityUrl}${plantId}`);
  }
}
