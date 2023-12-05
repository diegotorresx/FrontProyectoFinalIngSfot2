import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapaDeCalorComponent } from './mapa-de-calor/mapa-de-calor.component';
import { HistorialDeCasosComponent } from './historial-de-casos/historial-de-casos.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'mapa-de-calor', component: MapaDeCalorComponent , canActivate: [AuthGuard]},
  { path: 'historial-de-casos', component: HistorialDeCasosComponent , canActivate: [AuthGuard]},
  { path: 'historia-clinica', component: HistoriaClinicaComponent , canActivate: [AuthGuard]},
  { path: 'alertas', component: AlertasComponent , canActivate: [AuthGuard]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
