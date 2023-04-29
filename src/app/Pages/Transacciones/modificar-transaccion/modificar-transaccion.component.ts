import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/Models/categorias';
import { EntidadesFinancieras } from 'src/app/Models/entidades-financieras';
import { DTOTransacciones_DetT } from 'src/app/Models/transacciones';
import { TransaccionesService } from 'src/app/Services/transacciones.service';

@Component({
  selector: 'app-modificar-transaccion',
  templateUrl: './modificar-transaccion.component.html',
  styleUrls: ['./modificar-transaccion.component.css']
})
export class ModificarTransaccionComponent implements OnInit, OnDestroy{
  idTransaccion: number = 0;
  transaccion!: DTOTransacciones_DetT;
  entidadesF: EntidadesFinancieras[] = [];
  categorias: Categorias[] = [];
  form!: FormGroup;

  constructor(private servicio: TransaccionesService, private formBuilder: FormBuilder, private params: ActivatedRoute) {
    this.form = this.formBuilder.group({
      idTransaccion: ['',[Validators.required]],
      idEntidadFinanciera: ['',[Validators.required]],
      fechaTransaccion: [new Date],
      detallesTransacciones: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.idTransaccion = this.params.snapshot.params['id'];
    this.getTransaccion(this.idTransaccion);
    console.log(this.transaccion);
    this.getCombos();
    /*
    this.transaccion.detalleTransacciones.forEach((d) => {
        this.detallesTransacciones.push(
          this.formBuilder.group({
            idCategoria: [d.idCategoria, Validators.required],
            detalle: [d.detalle, [Validators.required, Validators.pattern('[a-zA-Z, 1-9]{2,254}')]],
            monto: [d.monto, [Validators.required, Validators.pattern('^([1-9]\\d*)|[0]')]]
        })
      )
    })
    */
  }

  ngOnDestroy(): void {
  }

  get detallesTransacciones(): FormArray {
    return this.form.get('detalleTransacciones') as FormArray;
  }

  detalleTransaccionForm() {
    return this.formBuilder.group({
        idCategoria: ['', Validators.required],
        detalle: ['', [Validators.required, Validators.pattern('[a-zA-Z, 1-9]{2,254}')]],
        monto: ['', [Validators.required, Validators.pattern('^([1-9]\\d*)|[0]')]]
    })
  }

  newDetalleForm(){
    this.detallesTransacciones.push(this.detalleTransaccionForm());
  }

  deleteDetalleForm(i: number){
    this.detallesTransacciones.removeAt(i)
  }

  getTransaccion(id: number){
    this.servicio.GetTransaccionByID(id).subscribe({
      next: (data) => {this.transaccion = data, console.log(this.transaccion) },
      error: (error) => {console.log(error)}
    })
  }

  getCombos(){
    this.servicio.GetCategorias().subscribe({
      next: (resultado) => {this.categorias = resultado},
      error: (error) => {console.log(error)}
    });
    this.servicio.GetEntidadFinanciera().subscribe({
      next: (resultado) => {this.entidadesF = resultado},
      error: (error) => {console.log(error)}
    })
  }

  guardar(){/*
    const result = this.form.value
    const dts: ComandoDetalleTransaccione[] = [];

    this.detalleTransacciones.value.forEach((d: any) => {
      const det = {
        idDetalleTransaccion: 0,
        idCategoria: d.idCategoria,
        detalle: d.detalle,
        monto: d.monto,
        idTransaccion: 0
      }
      dts.push(det)
    })

    const tr: ComandoTransaccion = {
      idTransaccion: 0,
      fechaTransaccion: new Date(),
      idEntidadFinanciera: result.idEntidadFinanciera,
      detallesTransacciones: dts
    }
    this.servicio.PostTransaccion(tr).subscribe((data) => {
      if(!data.ok){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: 'Transaccion registrada con exito',
          showConfirmButton: false,
          timer: 3000
        });
        this.router.navigateByUrl("/transacciones/listado");
      }
    });*/
  }

}
