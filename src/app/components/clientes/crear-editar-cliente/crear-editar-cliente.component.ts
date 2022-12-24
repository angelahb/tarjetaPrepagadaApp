import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-crear-editar-cliente',
  templateUrl: './crear-editar-cliente.component.html',
  styleUrls: ['./crear-editar-cliente.component.css']
})
export class CrearEditarClienteComponent implements OnInit {

  titulo = 'Crear Cliente';
  miFormulario: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClientesService,
    private router: Router,
    private aRoute: ActivatedRoute,    
  ) { 
    this.miFormulario = this.fb.group({
      cliente: ['', [Validators.required, Validators.minLength(3)]],
      saldo: ['', [Validators.required]],
      estado: [false, Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
  }

  ngOnInit(): void {
    this.esEditar();
  }


  agregarEditarUsuario(){
    if (this.miFormulario.invalid) {
     return 
    }

    if (this.id === null) {
      this.agregarUsuario();
    } else {
      this.editarUsuario(this.id);
    }
  }

  agregarUsuario(){
    // console.log(this.miFormulario);
    const guardaCliente: any = {
      cliente: this.miFormulario.get('cliente')?.value,
      saldo: this.miFormulario.get('saldo')?.value,
      estado: this.miFormulario.get('estado')?.value
    }

    this.clienteService.guardarCliente(guardaCliente).subscribe( resp => {
      console.log('Cliente Guardado');
      this.router.navigate(['/prepagada/clientes'])
    })
  }

  editarUsuario(cuentaNro: string){
    const editaCliente: any = {
      cliente: this.miFormulario.value.cliente,
      saldo: this.miFormulario.value.saldo,
      estado: this.miFormulario.value.estado,
    }
    
    this.clienteService.editarCliente(cuentaNro, editaCliente).subscribe(resp => {
      // console.log(resp);
      console.log('Cliente Modificado');
      this.router.navigate(['/prepagada/clientes']);
      
    })
  }

  esEditar(){
    this.titulo = 'Editar Cliente';
    if (this.id !== null) {
      this.clienteService.obtenerCliente(this.id).subscribe(resp => {
        console.log(resp);
        this.miFormulario.setValue({
          cliente: resp.cliente,
          saldo: resp.saldo,
          estado: resp.estado
        })
      })
    }
  }
}
