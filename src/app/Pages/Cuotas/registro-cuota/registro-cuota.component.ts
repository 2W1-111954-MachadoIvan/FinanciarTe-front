import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cuotas } from 'src/app/Models/cuotas';
import { CuotasService } from 'src/app/Services/cuotas.service';

@Component({
  selector: 'app-registro-cuota',
  templateUrl: './registro-cuota.component.html',
  styleUrls: ['./registro-cuota.component.css']
})
export class RegistroCuotaComponent implements OnInit{
  cuotas: Cuotas[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private servicio: CuotasService, private router: Router, private params: ActivatedRoute){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  actualizarListado(id: number){
    this.subscription.add(
      this.servicio.GetCuotasCliente(id).subscribe({
        next: (data) => {this.cuotas = data, console.log(this.cuotas)},
        error: (error) => {console.log(error)}
      })
    );
  }

}
