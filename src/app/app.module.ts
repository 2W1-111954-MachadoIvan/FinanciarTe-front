import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { AltaTransaccionComponent } from './Pages/Transacciones/alta-transaccion/alta-transaccion.component';
import { ListadoTransaccionesComponent } from './Pages/Transacciones/listado-transacciones/listado-transacciones.component';
import { VistaTransaccionComponent } from './Pages/Transacciones/vista-transaccion/vista-transaccion.component';
import { ModificarTransaccionComponent } from './Pages/Transacciones/modificar-transaccion/modificar-transaccion.component';

registerLocaleData(localeEsAr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AltaClienteComponent,
    ModificacionClienteComponent,
    ListadoClientesComponent,
    VistaClienteComponent,
    EdadPipe,
    AltaTransaccionComponent,
    ListadoTransaccionesComponent,
    VistaTransaccionComponent,
    ModificarTransaccionComponent
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
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
