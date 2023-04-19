import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Home-Login/login/login.component';
import { AltaClienteComponent } from './Pages/Clientes/alta-cliente/alta-cliente.component';
import { ModificacionClienteComponent } from './Pages/Clientes/modificacion-cliente/modificacion-cliente.component';
import { ListadoClientesComponent } from './Pages/Clientes/listado-clientes/listado-clientes.component';
import { VistaClienteComponent } from './Pages/Clientes/vista-cliente/vista-cliente.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "login", component: LoginComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "clientes/alta", component: AltaClienteComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "clientes/modificar/:id", component: ModificacionClienteComponent },
  { path: "clientes/listado", component: ListadoClientesComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
  { path: "clientes/vista/:id", component: VistaClienteComponent/*, canActivate: [GuardAuthGuard], data: { roles: ['Admin', 'Vendedor'] } */},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
