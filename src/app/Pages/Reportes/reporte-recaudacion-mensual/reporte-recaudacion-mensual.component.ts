import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { RecaudacionMensual } from 'src/app/Models/recaudacion-mensual';
import { ReportesService } from 'src/app/Services/reportes.service';

@Component({
  selector: 'app-reporte-recaudacion-mensual',
  templateUrl: './reporte-recaudacion-mensual.component.html',
  styleUrls: ['./reporte-recaudacion-mensual.component.css']
})
export class ReporteRecaudacionMensualComponent {
  valores: number[] = [];
  recaudacionMensual: RecaudacionMensual[] = [];
  datos: ChartData = {
    labels: ['Recaudacion Real', 'Recaudacion Esperada'],
    datasets: [{
      type: 'bar',
      data: this.valores,
      borderColor: 'green',
      backgroundColor: ['rgba(0, 123, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
      yAxisID: 'y1'
    }]
  }

  options: ChartOptions = {
    plugins: {
      legend: {
          display: true,
          //backgroundcolor // Oculta la leyenda
      }
    },
    responsive: true,
    scales: {
      y1: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        title: {display: true, text: 'Recaudación'},
        ticks: {
          stepSize: 20000
        }
      }
    }
  }

  private subscription: Subscription = new Subscription();

  constructor(private servicio: ReportesService, private router: Router, private params: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.getRecaudacionMensual()
  }

  getRecaudacionMensual(){
    this.subscription.add(
      this.servicio.GetRecaudacionMensual().subscribe({
        next: (data) => {this.recaudacionMensual = data, this.llenarArrays(this.recaudacionMensual)},
        error: (error) => {console.log(error)}
      })
    );
  }

  llenarArrays(datos: RecaudacionMensual[]){

    for (let d of datos) {
      this.valores.push(d.recaudacionMensual);
      this.valores.push(d.recaudacionEsperada);
    }
  }

}
