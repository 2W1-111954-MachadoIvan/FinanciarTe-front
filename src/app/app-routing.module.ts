import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Home-Login/login/login.component';
import { AltaClienteComponent } from './Pages/Clientes/alta-cliente/alta-cliente.component';
import { ModificacionClienteComponent } from './Pages/Clientes/modificacion-cliente/modificacion-cliente.component';
import { ListadoClientesComponent } from './Pages/Clientes/listado-clientes/listado-clientes.component';
import { VistaClienteComponent } from './Pages/Clientes/vista-cliente/vista-cliente.component';
import { AltaTransaccionComponent } from './Pages/Transacciones/alta-transaccion/alta-transaccion.component';
import { ModificarTransaccionComponent } from './Pages/Transacciones/modificar-transaccion/modificar-transaccion.component';
import { ListadoTransaccionesComponent } from './Pages/Transacciones/listado-transacciones/listado-transacciones.component';
import { VistaTransaccionComponent } from './Pages/Transacciones/vista-transaccion/vista-transaccion.component';
import { HomeComponent } from './Pages/Home-Login/home/home.component';
import { AltaprestamoComponent } from './Pages/Prestamos/altaprestamo/altaprestamo.component';
import { ListadoPrestamoComponent } from './Pages/Prestamos/listado-prestamo/listado-prestamo.component';
import { ModificarPrestamoComponent } from './Pages/Prestamos/modificar-prestamo/modificar-prestamo.component';
import { VistaPrestamoComponent } from './Pages/Prestamos/vista-prestamo/vista-prestamo.component';
import { RegistroCuotaComponent } from './Pages/Cuotas/registro-cuota/registro-cuota.component';
import { ListadoCuotasComponent } from './Pages/Cuotas/listado-cuotas/listado-cuotas.component';
import { ModificarCuotaComponent } from './Pages/Cuotas/modificar-cuota/modificar-cuota.component';
import { VistaCuotaComponent } from './Pages/Cuotas/vista-cuota/vista-cuota.component';
import { GeneralComponent } from './Pages/Prestamos/general/general.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "login", component: LoginComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "clientes/alta", component: AltaClienteComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "clientes/modificar/:id", component: ModificacionClienteComponent },
  { path: "clientes/listado", component: ListadoClientesComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "clientes/vista/:id", component: VistaClienteComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "transacciones/registrar", component: AltaTransaccionComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "transacciones/modificar/:id", component:  ModificarTransaccionComponent },
  { path: "transacciones/listado", component: ListadoTransaccionesComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "transacciones/vista/:id", component: VistaTransaccionComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "prestamos/listadogeneral", component: GeneralComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "prestamos/alta", component: AltaprestamoComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "prestamos/listado/:id", component: ListadoPrestamoComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "prestamos/modificar/:id", component: ModificarPrestamoComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "prestamos/vista/:id", component: VistaPrestamoComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "cuotas/alta", component: RegistroCuotaComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "cuotas/listado/:id", component: ListadoCuotasComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "cuotas/modificar/:id", component: ModificarCuotaComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "cuotas/vista/:id", component: VistaCuotaComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
