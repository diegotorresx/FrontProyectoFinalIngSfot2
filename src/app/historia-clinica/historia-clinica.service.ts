import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private apiUrl = 'https://localhost:7279/DiseaseReport'; // Cambia esto por la URL real del API

  constructor(private http: HttpClient) { }

  /**
   * Envía los datos del formulario de historia clínica al API.
   * @param formValue Los valores obtenidos del formulario.
   * @returns Observable del resultado de la petición HTTP.
   */
  enviarDatos(formValue: any): Observable<any> {
    // Crear el objeto de datos según la estructura esperada por el API
    const apiData = {
      idDiseaseReport: 0, // Suponiendo que el API genera este ID
      idZoonoticDisease: formValue.enfermedad === 'leptospirosis' ? 1 : 2,
      idUser: 1, // Valor por defecto
      fecha: formValue.fechaConsulta,
      description: formValue.diagnostico, // Asumiendo que corresponde al campo diagnostico
      animalName: formValue.nombreAnimal,
      animalSpecie: formValue.tipoAnimal,
      raza: formValue.raza,
      ageAnimal: formValue.edad,
      dateReport: new Date().toISOString() // Fecha actual
    };

    // Realizar la petición POST al API
    return this.http.post(this.apiUrl, apiData);
  }
}
