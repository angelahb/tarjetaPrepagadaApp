import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from '../interface/clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string = environment.baseUrl + '/cliente';
  

  constructor(
    private http: HttpClient
  ) { }

  listarClientes(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(`${this.baseUrl}/listarClientes`);
  }

  guardarCliente(cliente: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(`${this.baseUrl}/guardarCliente`, cliente);
  }

  editarCliente(cuentaNro: String, cliente: Clientes): Observable<Clientes>{
    return this.http.put<Clientes>(`${this.baseUrl}/editarCliente/${cuentaNro}`, cliente);
  }

  obtenerCliente(id: string): Observable<Clientes>{
    return this.http.get<Clientes>(`${this.baseUrl}/obtenerCliente/${id}`);
  }

  eliminarCliente(id: number): Observable<Clientes>{
    return this.http.delete<Clientes>(`${this.baseUrl}/eliminarCliente/${id}`);
  }
}
