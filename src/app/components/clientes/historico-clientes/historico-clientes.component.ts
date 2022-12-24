import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../interface/clientes';

@Component({
  selector: 'app-historico-clientes',
  templateUrl: './historico-clientes.component.html',
  styleUrls: ['./historico-clientes.component.css']
})
export class HistoricoClientesComponent implements OnInit {

  clientes: Clientes[] = [];
  spinner: boolean = false;


  constructor(
    private clienteServices: ClientesService
  ) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clienteServices.listarClientes().subscribe( resp => {
      this.clientes = resp;
      
      console.log(this.clientes);

    });
  }

  eliminarCliente(id: number){
    this.clienteServices.eliminarCliente(id).subscribe(resp => {
      // console.log('Usuario Borrado', id);
      this.listarClientes();
      
    })
  }

}
