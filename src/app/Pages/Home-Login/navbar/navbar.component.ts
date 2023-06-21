import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/Services/navbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public nav: NavbarService, private router: Router ) {}

  async prestamosPorCliente(){
    Swal.fire({
      title: 'Ingrese el DNI',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      inputValidator: (result) => {
        if (!result) {
          return 'Por favor, ingrese un DNI válido';
        } else {
          return ''
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const url = "/prestamos/listado/" + result.value;
        this.router.navigateByUrl(url).then(() => {
          window.location.reload();
        });
      }
    });
  }

  async buscarCliente(){
    Swal.fire({
      title: 'Ingrese el DNI',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      inputValidator: (result) => {
        if (!result) {
          return 'Por favor, ingrese un DNI válido';
        } else {
          return ''
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const url = "clientes/vista/" + result.value;
        this.router.navigateByUrl(url).then(() => {
          window.location.reload();
        });
      }
    });
  }

}
