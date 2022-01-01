import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugares } from '../models/lugares';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  URL='http://localhost:4000/api/lugares/';
  constructor(private http: HttpClient) { }
  getLugares(): Observable<any>{
    return this.http.get(this.URL);
  }
  eliminarLugar(id: string): Observable<any>{
    return this.http.delete(this.URL + id);
  }
  guardarLugar(lugar: Lugares): Observable<any>{
    return this.http.post(this.URL, lugar);
  }
  obtenerLugar(id: string): Observable<any>{
    return this.http.get(this.URL + id);
  }
  editarLugar(id: string, lugar: Lugares): Observable<any>{
    return this.http.put(this.URL+id, lugar);
  }
  consultarLugar(nombre: string): Observable<any>{
    return this.http.get(this.URL + nombre);
  }
}
