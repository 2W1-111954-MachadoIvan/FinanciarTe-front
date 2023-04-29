import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DTOTransacciones } from 'src/app/Models/transacciones';
import { TransaccionesService } from 'src/app/Services/transacciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-transacciones',
  templateUrl: './listado-transacciones.component.html',
  styleUrls: ['./listado-transacciones.component.css']
})
export class ListadoTransaccionesComponent {
  transaccion!: DTOTransacciones;
  transacciones: DTOTransacciones[] = [];
  idTr: number = 0;
  offCanvasVista: boolean = false;
  offCanvasModificar: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private servicio: TransaccionesService, private router: Router){}

  ngOnInit(): void {
    this.actualizarListado();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicio.GetTransacciones().subscribe({
        next: (data) => {this.transacciones = data },
        error: (error) => {console.log(error)}
      })
    );
  }

  anular(id: number) {
    // Swal.fire({
    //   title: '¿Deseas eliminar este cliente?',
    //   showDenyButton: false,
    //   showCancelButton: true,
    //   confirmButtonText: 'Borrar',
    //   cancelButtonText: "Cancelar",
    //   cancelButtonColor: "#dc3545",
    //   confirmButtonColor: "#2c5672",
    //   icon: "warning",
    //   denyButtonText: 'No',
    //   customClass: {
    //     actions: 'my-actions',
    //     cancelButton: 'order-1 right-gap',
    //     confirmButton: 'order-2',
    //     denyButton: 'order-3',
    //   }
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.servicio.DeleteCliente(id).subscribe({
    //       next: (resultado) => { Swal.fire('Cliente eliminado!', '', 'success'), this.actualizarListado() },
    //       error: (error) => { console.log(error); }
    //     })

    //   } else if (result.isDenied) {

    //   }
    // })
  }

  ModificarTransaccion(id: number) {
    this.router.navigateByUrl("/transacciones/modificar/" + id);
  }

  verTransaccion(id: number) {
    this.offCanvasModificar = false;
    this.idTr = id;
    this.offCanvasVista = true;
  }

}
