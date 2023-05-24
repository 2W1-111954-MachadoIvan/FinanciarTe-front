import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DTOListadoPrestamos } from 'src/app/Models/prestamos';
import { PrestamosService } from 'src/app/Services/prestamos.service';

@Component({
  selector: 'app-listado-prestamo',
  templateUrl: './listado-prestamo.component.html',
  styleUrls: ['./listado-prestamo.component.css']
})
export class ListadoPrestamoComponent implements OnInit{
  prestamos: DTOListadoPrestamos[] = [];
  idPrestamo: number = 0;
  offCanvasVista: boolean = false;


  private subscription: Subscription = new Subscription();

  constructor(private servicio: PrestamosService, private router: Router){}
  
  ngOnInit(): void {
    this.actualizarListado(33415122);
  }

  actualizarListado(id: number){
    this.subscription.add(
      this.servicio.GetPrestamosByCliente(id).subscribe({
        next: (data) => {this.prestamos = data},
        error: (error) => {console.log(error)}
      })
    );
  }

  verPrestamo(id: number){
    this.idPrestamo = id;
    this.offCanvasVista = true;
  }

  modificarPrestamo(id: number){

  }

  anular(id: number){

  }

}
