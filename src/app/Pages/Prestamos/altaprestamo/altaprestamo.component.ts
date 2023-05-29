import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClienteComboBox, DTOCliente } from 'src/app/Models/cliente';
import { EntidadesFinancieras } from 'src/app/Models/entidades-financieras';
import { DTOListadoPrestamos, Prestamos } from 'src/app/Models/prestamos';
import { ClienteService } from 'src/app/Services/cliente.service';
import { PrestamosService } from 'src/app/Services/prestamos.service';

@Component({
  selector: 'app-altaprestamo',
  templateUrl: './altaprestamo.component.html',
  styleUrls: ['./altaprestamo.component.css']
})
export class AltaprestamoComponent implements OnInit, OnDestroy{
  @Input() id!: number;
  @Input() offCanvasNewPrestamo: boolean = false;
  cliente!: DTOCliente;
  form!: FormGroup;
  prestamo!: Prestamos;
  prestamos!: DTOListadoPrestamos[];
  clientes: ClienteComboBox[] = [];
  entidadesF: EntidadesFinancieras[] = [];
  cuotas: number[] = Array.from(Array(12), (_, index) => index + 1);
  diaVenc: number[] = Array.from(Array(30), (_, index) => index + 1);

  private subscription: Subscription = new Subscription();

  constructor(private servicioPrestamos: PrestamosService, private servicioCliente: ClienteService, private formBuilder: FormBuilder, private router: Router, private params: ActivatedRoute) {
    this.form = this.formBuilder.group({
      cuotas: ['',[Validators.required]],
      montoOtorgado: ['',[Validators.required]],
      diaVencimiento: ['',[Validators.required]],
      refinanciaDeuda: ['',[]],
      prestamoRef: ['',[]],
      entidadFinanciera: ['',Validators.required],
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getCombos();
    this.getCliente(this.id)
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

  getCliente(id: number){
    this.subscription.add(
      this.servicioCliente.GetViewClienteByID(id).subscribe({
        next: (data) => {this.cliente = data, console.log(this.cliente)},
        error: (error) => {console.log(error)}
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      this.getCliente(changes['id'].currentValue)
    }
  }

  mostrar() {
    this.offCanvasNewPrestamo = true;
  }

  ocultar() {
    this.offCanvasNewPrestamo = false;
    this.ngOnDestroy()
  }

}
