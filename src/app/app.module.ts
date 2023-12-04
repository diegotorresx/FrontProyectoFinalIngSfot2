import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapaDeCalorComponent } from './mapa-de-calor/mapa-de-calor.component';
import { HistorialDeCasosComponent } from './historial-de-casos/historial-de-casos.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { AlertasComponent } from './alertas/alertas.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoriaClinicaDialogComponent } from './historia-clinica-dialog/historia-clinica-dialog.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'historia-clinica-dialog', component: HistoriaClinicaDialogComponent, canActivate: [AuthGuard] },
  { path: 'historia-clinica', component: HistoriaClinicaComponent, canActivate: [AuthGuard] },
  { path: 'historial-de-casos', component: HistorialDeCasosComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapaDeCalorComponent,
    HistorialDeCasosComponent,
    HistoriaClinicaComponent,
    AlertasComponent,
    MenuDesplegableComponent,
    HistoriaClinicaDialogComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    GoogleMapsModule,
    NgChartsModule,
    AppRoutingModule,
    CommonModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
