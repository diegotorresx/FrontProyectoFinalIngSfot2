import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-historia-clinica-dialog',
  templateUrl: './historia-clinica-dialog.component.html',
  styleUrls: ['./historia-clinica-dialog.component.css']
})
export class HistoriaClinicaDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
}
