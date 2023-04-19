import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DTOCliente } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/Services/cliente.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.css']
})
export class VistaClienteComponent implements OnInit {
  cliente!: DTOCliente;
  idCliente!: number;

  private subscription = new Subscription();

  constructor(private servicio: ClienteService, private params:ActivatedRoute) { }

  ngOnInit(): void {

    this.idCliente = this.params.snapshot.params['id']

    this.getCliente(this.idCliente);
  }

  getCliente(id: number){
    this.servicio.GetViewClienteByID(id).subscribe({
      next: (data) => {this.cliente = data, console.log(this.cliente)},
      error: (error) => {console.log(error)}
    })
  }

}
