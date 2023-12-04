import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapaDeCalorComponent } from './mapa-de-calor/mapa-de-calor.component';
import { HistorialDeCasosComponent } from './historial-de-casos/historial-de-casos.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { AlertasComponent } from './alertas/alertas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mapa-de-calor', component: MapaDeCalorComponent },
  { path: 'historial-de-casos', component: HistorialDeCasosComponent },
  { path: 'historia-clinica', component: HistoriaClinicaComponent },
  { path: 'alertas', component: AlertasComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
