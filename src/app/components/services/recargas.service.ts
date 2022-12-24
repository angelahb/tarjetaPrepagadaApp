import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  constructor() { }


  // historicoRecargas(cuentaNro: number): Observable<Recargas[]>{
  //   return this.http.get<Recargas[]>(`${this.baseUrl}/recargas/historicoRecargas${cuentaNro}`);
  // }
}
