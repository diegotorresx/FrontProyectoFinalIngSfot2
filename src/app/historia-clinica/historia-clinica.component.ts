import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistoriaClinicaService } from './historia-clinica.service'; // Asegúrate de que la ruta de importación sea correcta

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {
  historiaClinicaForm: FormGroup;

  constructor(private fb: FormBuilder, private historiaClinicaService: HistoriaClinicaService) {
    // Inicializar el formulario
    this.historiaClinicaForm = this.fb.group({
      nombreAnimal: ['', Validators.required],
      tipoAnimal: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      fechaConsulta: [new Date(), Validators.required],
      enfermedad: ['', Validators.required], // Asegúrate de que este campo corresponda al del HTML
      diagnostico: ['', Validators.required],
      vacunado: [false] // Este campo no se enviará al API
      // ... puedes añadir más campos según necesites
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.historiaClinicaForm.valid) {
      // Llamar al servicio para enviar los datos
      this.historiaClinicaService.enviarDatos(this.historiaClinicaForm.value)
      .subscribe({
        next: (response) => {
          console.log('Datos enviados con éxito', response);
          // Manejo de la respuesta exitosa
        },
        error: (error) => {
          console.error('Error al enviar datos', error);
          // Manejo de errores
        },
        complete: () => {
          // Opcional: código que se ejecuta al completarse el Observable
          console.log('Operación completada');
        }
      });
    } else {
      console.log('Formulario no válido');
      // Aquí puedes manejar la situación cuando el formulario no es válido
    }
  }
}