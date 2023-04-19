import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './Pages/Home-Login/login/login.component';
import { HomeComponent } from './Pages/Home-Login/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaClienteComponent } from './Pages/Clientes/alta-cliente/alta-cliente.component';
import { ModificacionClienteComponent } from './Pages/Clientes/modificacion-cliente/modificacion-cliente.component';
import { ListadoClientesComponent } from './Pages/Clientes/listado-clientes/listado-clientes.component';
import { VistaClienteComponent } from './Pages/Clientes/vista-cliente/vista-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { EdadPipe } from './Pipes/edad.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AltaClienteComponent,
    ModificacionClienteComponent,
    ListadoClientesComponent,
    VistaClienteComponent,
    EdadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
