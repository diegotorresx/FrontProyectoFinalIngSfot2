import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapaDeCalorService } from './mapa-de-calor.service';

declare var google: any;

@Component({
  selector: 'app-mapa-de-calor',
  template: `<div #mapElement style="height: 500px;"></div>`,
  styleUrls: ['./mapa-de-calor.component.css']
})
export class MapaDeCalorComponent implements OnInit {
  @ViewChild('mapElement', { static: true }) mapElement!: ElementRef;
  map: any;
  center = { lat: 4.7100, lng: -74.0721 };
  zoom = 13;

  constructor(private mapaDeCalorService: MapaDeCalorService) {}

  ngOnInit() {
    this.mapaDeCalorService.obtenerCasos().subscribe((casos: any[]) => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: this.zoom,
        center: this.center
      });

      casos.forEach(caso => {
        // Generar una ubicación aleatoria dentro de Bogotá
        const location = this.generateRandomLocation(this.center, 0.1);
        const marker = new google.maps.Marker({
          position: location,
          map: this.map,
          label: caso.ID_PLANTA
        });
      });
    });
  }

  generateRandomLocation(center: { lat: number, lng: number }, radius: number): { lat: number, lng: number } {
    const y0 = center.lat;
    const x0 = center.lng;
    const rd = radius / 111300; // Sobre 111300 metros en un grado

    const u = Math.random();
    const v = Math.random();

    const w = rd * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const xp = x / Math.cos(y0);

    return { 'lat': y + y0, 'lng': xp + x0 };
  }
}