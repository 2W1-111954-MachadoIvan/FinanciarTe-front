import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClienteComboBox } from 'src/app/Models/cliente';
import { EntidadesFinancieras } from 'src/app/Models/entidades-financieras';
import { DTOListadoPrestamos, Prestamos } from 'src/app/Models/prestamos';
import { ClienteService } from 'src/app/Services/cliente.service';
import { PrestamosService } from 'src/app/Services/prestamos.service';

@Component({
  selector: 'app-altaprestamo',
  templateUrl: './altaprestamo.component.html',
  styleUrls: ['./altaprestamo.component.css']
})
export class AltaprestamoComponent implements OnInit{
  form!: FormGroup;
  prestamo!: Prestamos;
  prestamos!: DTOListadoPrestamos[];
  clientes: ClienteComboBox[] = [];
  entidadesF: EntidadesFinancieras[] = [];
  cuotas: number[] = Array.from(Array(12), (_, index) => index + 1);
  diaVenc: number[] = Array.from(Array(30), (_, index) => index + 1);

  private subscription: Subscription = new Subscription();

  constructor(private servicioPrestamos: PrestamosService, private servicioCliente: ClienteService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      idCliente: ['',[Validators.required]],
      cuotas: ['',[Validators.required]],
      montoOtorgado: ['',[Validators.required]],
      disVencimiento: ['',[Validators.required]],
      scoring: ['',[Validators.required]],
      indiceInteres: ['',[Validators.required]],
      refinanciaDeuda: ['',[]],
      prestamoRef: ['',[]],
      entidadFinanciera: ['',Validators.required],
      fecha: ['', new Date]
    })
  }

  ngOnInit(): void {
    this.getCombos();
    this.actualizarListadoPrestamos(33415122)    
  }

  getCombos(){
    this.servicioCliente.GetClientesForComboBox().subscribe({
      next: (resultado) => {this.clientes = resultado},
      error: (error) => {console.log(error)}
    });
    this.servicioPrestamos.GetEntidadFinanciera().subscribe({
      next: (resultado) => {this.entidadesF = resultado},
      error: (error) => {console.log(error)}
    })
  }

  actualizarListadoPrestamos(id: number){
    this.subscription.add(
      this.servicioPrestamos.GetPrestamosByCliente(id).subscribe({
        next: (data) => {this.prestamos = data},
        error: (error) => {console.log(error)}
      })
    );
  }

}
