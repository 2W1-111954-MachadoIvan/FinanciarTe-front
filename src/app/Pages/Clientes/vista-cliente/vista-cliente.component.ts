import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DTOCliente } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/Services/cliente.service';
import { NavbarService } from 'src/app/Services/navbar.service';


@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.css']
})
export class VistaClienteComponent implements OnInit {
  cliente!: DTOCliente;
  id!: number;
  offCanvasNewPrestamo: boolean = false;

  constructor(private servicio: ClienteService, private params:ActivatedRoute, private nav: NavbarService) { }

  ngOnInit(): void {
    this.id = this.params.snapshot.params['id'];
    this.getCliente(this.id);
    this.nav.show();
  }

  getCliente(id: number){
    this.servicio.GetViewClienteByID(id).subscribe({
      next: (data) => {this.cliente = data},
      error: (error) => {console.log(error)}
    })
  }

  newPrestamo(id: number){
    this.id = id;
    this.offCanvasNewPrestamo = true;
  }

}
