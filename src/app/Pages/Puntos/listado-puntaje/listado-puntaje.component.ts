import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-listado-puntaje',
  templateUrl: './listado-puntaje.component.html',
  styleUrls: ['./listado-puntaje.component.css']
})
export class ListadoPuntajeComponent implements OnInit{

  constructor(private nav: NavbarService){

  }

  ngOnInit(): void {
    this.nav.show();
  }

}
