import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HistoricoClientesComponent } from './clientes/historico-clientes/historico-clientes.component';
import { ComprasComponent } from './compras/compras/compras.component';
import { RecargarSaldoComponent } from './recargas/recargar-saldo/recargar-saldo.component';
import { CrearEditarClienteComponent } from './clientes/crear-editar-cliente/crear-editar-cliente.component';

const routes: Routes = [
  {
    path: '',
    children: [      
      { path: 'menu', component: MenuComponent },
      { path: 'clientes', component: HistoricoClientesComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'recargas', component: RecargarSaldoComponent },
      { path: 'editarCliente', component: CrearEditarClienteComponent },
      { path: 'editarCliente/:id', component: CrearEditarClienteComponent },
      { path: '**', redirectTo: 'menu' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetaRoutingModule { }
