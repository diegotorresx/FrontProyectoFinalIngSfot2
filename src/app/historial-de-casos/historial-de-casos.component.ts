import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HistorialDeCasosService } from './historial-de-casos.service';

@Component({
  selector: 'app-historial-de-casos',
  templateUrl: './historial-de-casos.component.html',
  styleUrls: ['./historial-de-casos.component.css']
})
export class HistorialDeCasosComponent implements OnInit {
  
  datos!: MatTableDataSource<any>;
  columnasMostradas: string[] = ['ID_SENSOR', 'VALOR', 'FECHA', 'ID_PLANTA'];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private historialDeCasosService: HistorialDeCasosService) { }

  ngOnInit(): void {
    this.historialDeCasosService.obtenerCasos().subscribe((casos: any[]) => {
      this.datos = new MatTableDataSource(casos.reverse()); // Ordena los casos del último al primero
      this.datos.sort = this.sort;
    });
  }

  aplicarFiltroEvento(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.datos.filter = valorFiltro.trim().toLowerCase();
  }
}