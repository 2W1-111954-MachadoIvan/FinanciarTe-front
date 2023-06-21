import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { DTOCliente } from 'src/app/Models/cliente';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ReportesService } from 'src/app/Services/reportes.service';

@Component({
  selector: 'app-reporte-clientes-prestamos',
  templateUrl: './reporte-clientes-prestamos.component.html',
  styleUrls: ['./reporte-clientes-prestamos.component.css']
})
export class ReporteClientesPrestamosComponent {
  labels: string[] = [];
  values: number[] = [];
  clientes: DTOCliente[] = [];
  datos: ChartData = {
    labels: this.labels,
    datasets: [{
      type: 'bar',
      label: 'Monto Actual',
      data: this.values,
      borderColor: 'green',
      backgroundColor: ['rgba(0, 255, 0, 0.5)']
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
        title: {display: true, text: 'Cantidad de Prestamos'},
        ticks: {
          stepSize: 3
        }
      }
    }
  }

  private subscription: Subscription = new Subscription();

  constructor(private servicio: ReportesService, private router: Router, private params: ActivatedRoute, private nav: NavbarService){

  }
  ngOnInit(): void {
    this.getRecaudacionMensual();
    this.nav.show();
  }

  getRecaudacionMensual(){
    this.subscription.add(
      this.servicio.GetClientesConMasPrestamo().subscribe({
        next: (data) => {this.clientes = data, console.log(this.clientes),this.llenarArrays(this.clientes)},
        error: (error) => {console.log(error)}
      })
    );
  }

  llenarArrays(datos: DTOCliente[]){
    for (let d of datos) {
      this.labels.push(`${d.apellidos}, ${d.nombres}`);
      this.values.push(d.cantidadDePrestamos);
    }
  }

}
