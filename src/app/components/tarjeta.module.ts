import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { CrearEditarClienteComponent } from './clientes/crear-editar-cliente/crear-editar-cliente.component';
import { HistoricoClientesComponent } from './clientes/historico-clientes/historico-clientes.component';
import { ComprasComponent } from './compras/compras/compras.component';
import { HistoricoComprasComponent } from './compras/historico-compras/historico-compras.component';
import { MenuComponent } from './menu/menu.component';
import { HistoricoRecargasComponent } from './recargas/historico-recargas/historico-recargas.component';
import { RecargarSaldoComponent } from './recargas/recargar-saldo/recargar-saldo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearEditarClienteComponent,
    HistoricoClientesComponent,
    ComprasComponent,
    HistoricoComprasComponent,
    MenuComponent,
    HistoricoRecargasComponent,
    RecargarSaldoComponent
  ],
  imports: [
    CommonModule,
    TarjetaRoutingModule,
    FormsModule,   
    ReactiveFormsModule,

  ]
})
export class TarjetaModule { }
