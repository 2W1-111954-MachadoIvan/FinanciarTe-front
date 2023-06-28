import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DTOUsuario } from 'src/app/Models/usuario';
import { NavbarService } from 'src/app/Services/navbar.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit{
  usuarios: DTOUsuario[] = [];

  private subscription = new Subscription();

  constructor(private nav: NavbarService, private servicioUsuarios: UsuarioService){}


  ngOnInit(): void {
    this.nav.show();
    this.actualizarListado();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioUsuarios.GetViewUsuarios().subscribe({
        next:(resultado)=>{this.usuarios = resultado, console.log(this.usuarios)},
        error:(error)=>console.log("Error al obtener los datos ", error)
      })
    );
  }

  verUsuario(legajo: number){

  }

  modificarUsuario(legajo: number){

  }

  desactivar(legajo: number){

  }



}
