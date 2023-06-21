import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { DTOCuotasMesEnCurso } from 'src/app/Models/cuotas';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ReportesService } from 'src/app/Services/reportes.service';

@Component({
  selector: 'app-reporte-cuotas',
  templateUrl: './reporte-cuotas.component.html',
  styleUrls: ['./reporte-cuotas.component.css']
})
export class ReporteCuotasComponent {
  labels: string[] = [];
  values: number[] = [];
  balance: DTOCuotasMesEnCurso[] = [];
  datos: ChartData = {
    labels: this.labels,
    datasets: [{
      type: 'pie',
      label: '',
      data: this.values,
      borderColor: 'green',
      backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(0, 123, 255, 0.5)']
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

  constructor(private servicio: ReportesService, private router: Router, private params: ActivatedRoute, private nav: NavbarService){

  }
  ngOnInit(): void {
    this.getRecaudacionMensual();
    this.nav.show();
  }

  getRecaudacionMensual(){
    this.subscription.add(
      this.servicio.GetCuotasMesEnCurso().subscribe({
        next: (data) => {this.balance = data, this.llenarArrays(this.balance)},
        error: (error) => {console.log(error)}
      })
    );
  }

  llenarArrays(datos: DTOCuotasMesEnCurso[]){
    for (let d of datos) {
      this.labels.push(d.descripcion);
      this.values.push(d.cantidad);
    }
  }

}
