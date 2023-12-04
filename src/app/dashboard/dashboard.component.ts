import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset } from 'chart.js';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { PlantaInterface } from './planta-interface'
import { HumityData } from './humity-data'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public plantIds: string[] = [];
  public selectedPlantId: string = '';
  public humidityData: number[] = [];

  // Configuración de gráficos
  public pieChartType: ChartType = 'pie';
  public barChartType: ChartType = 'bar';
  public pieChartData: any[] = [{ data: [0], label: 'Humedad' }];
  public barChartData: any[] = [{ data: [0], label: 'Humedad' }];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // Datos numéricos
  public numericItems: { label: string, value: string }[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadPlantIds();
    setInterval(() => this.updateData(), 5000);
  }

  loadPlantIds() {
    this.dashboardService.getPlantIds().subscribe((response: PlantaInterface[]) => {
      this.plantIds = response.map(item => item.ID_PLANTA);
    });
  }

  updateData() {
    if (this.selectedPlantId) {
      this.dashboardService.getHumidityData(this.selectedPlantId).subscribe((response: HumityData[]) => {
        const lastHumidityData = response[response.length - 1];
        const lastHumidity = parseFloat(lastHumidityData.VALOR);
        this.pieChartData = [{ data: [lastHumidity], label: 'Humedad' }];
        this.barChartData = [{ data: [lastHumidity], label: 'Humedad' }];

        this.numericItems = response.slice(-5).map((item, index) => ({
          label: `Humedad ${index + 1}`,
          value: item.VALOR
        }));
      });
    }
  }

  onPlantIdChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedPlantId = selectElement.value;
    this.updateData();
  }
}