import { Component, OnInit } from '@angular/core';
import { AlertasService } from './alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  alertas: any[] = [];

  constructor(private alertasService: AlertasService) { }

  ngOnInit(): void {
    this.alertasService.obtenerCasos().subscribe((datosApi: any[]) => {
      // Suponiendo que los datos más recientes vienen primero en la respuesta de la API
      this.alertas = datosApi.slice(0, 50).map(alerta => ({
        fechaHora: alerta.FECHA,
        especie: alerta.ID_PLANTA, // Asumiendo que ID_PLANTA corresponde a la especie
        enfermedad: 'Desconocida', // Aquí deberías ajustar según tu lógica
        ubicacion: 'Ubicación no disponible' // Dado que no está disponible en la respuesta del API
      }));
    });
  }
}