import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { DolarIndice } from 'src/app/Models/dolar-indice';
import 'chartjs-plugin-annotation';
import 'chartjs-plugin-datalabels';
import { ReportesService } from 'src/app/Services/reportes.service';


@Component({
  selector: 'app-reporte-variacion-dolar-indice',
  templateUrl: './reporte-variacion-dolar-indice.component.html',
  styleUrls: ['./reporte-variacion-dolar-indice.component.css']
})
export class ReporteVariacionDolarIndiceComponent implements OnInit{
  hFechas: Date[] = [];
  hDolarOficial: number[] = [];
  hDolarBlue: number[] = [];
  hIndices: number[] = [];
  dolarIndice: DolarIndice[] = [];
  maxMinDolarIndice: DolarIndice[] = [];
  datos: ChartData = {
    labels: this.hFechas,
    datasets: [{
      type: 'bar',
      label: 'Dolar Oficial',
      data: this.hDolarOficial,
      borderColor: 'blue',
      backgroundColor: 'blue',
      yAxisID: 'y1'
    }, {
      type: 'line',
      label: 'Indice FinanciarTe',
      data: this.hIndices,
      fill: false,
      borderColor: 'red',
      pointBackgroundColor: 'red',
      yAxisID: 'y2'
    }]
  }

  options: ChartOptions = {
    responsive: true,
    scales: {
      y1: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        title: {display: true, text: 'Dolar Oficial'},
        ticks: {
          stepSize: 100
        }
      },
      y2: {
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
        title: {display: true, text: 'Indice Financiarte'}
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
  }

  private subscription: Subscription = new Subscription();

  constructor(private servicio: ReportesService, private router: Router, private params: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.getDolarIndice()
  }

  getDolarIndice(){
    this.subscription.add(
      this.servicio.GetValoresDolarIndice().subscribe({
        next: (data) => {this.dolarIndice = data, this.llenarArraysG1(this.dolarIndice)},
        error: (error) => {console.log(error)}
      })
    );
  }

  /*
  getMaxMinDolarIndice(){
    this.subscription.add(
      this.servicio.GetMaxMInDolarIndice().subscribe({
        next: (data) => {this.maxMinDolarIndice = data, this.llenarArraysG2(this.dolarIndice)},
        error: (error) => {console.log(error)}
      })
    );
  }
  */

  llenarArraysG1(datos: DolarIndice[]){
    datos.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA.getTime() - fechaB.getTime();
    })

    for (let d of datos) {
      this.hFechas.push(d.fecha);
      this.hDolarOficial.push(d.valorDolar);
      this.hIndices.push(d.indice*100);
    }
  }

}
