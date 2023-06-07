import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { Balance } from 'src/app/Models/balance';
import { ReportesService } from 'src/app/Services/reportes.service';

@Component({
  selector: 'app-reporte-balance-recomendacion',
  templateUrl: './reporte-balance-recomendacion.component.html',
  styleUrls: ['./reporte-balance-recomendacion.component.css']
})
export class ReporteBalanceRecomendacionComponent {
  labels: string[] = [];
  montosIniciales: number[] = [];
  montosActuales: number[] = [];
  balance: Balance[] = [];
  datos: ChartData = {
    labels: this.labels,
    datasets: [{
      type: 'bar',
      label: 'Monto Actual',
      data: this.montosActuales,
      borderColor: 'green',
      backgroundColor: ['rgba(0, 255, 0, 0.5)']
    },
    {
      type: 'bar',
      label: 'Monto Inicial',
      data: this.montosIniciales,
      borderColor: 'green',
      backgroundColor: ['rgba(255, 0, 0, 0.5)']
    }]
  }

  options: ChartOptions = {
    plugins: {
      datalabels: {
          display: true,
          anchor: 'end',
          align: 'top',
          color: '#000',
          font: {
              weight: 'bold'
          }
      }
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        title: {display: true, text: 'Recaudación'},
        ticks: {
          stepSize: 50000
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
      this.servicio.GetBalance().subscribe({
        next: (data) => {this.balance = data, console.log(this.balance),this.llenarArrays(this.balance)},
        error: (error) => {console.log(error)}
      })
    );
  }

  llenarArrays(datos: Balance[]){
    for (let d of datos) {
      this.labels.push(d.descripcion);
      this.montosIniciales.push(d.montoInicial);
      this.montosActuales.push(d.montoActual);
    }
  }
  
}