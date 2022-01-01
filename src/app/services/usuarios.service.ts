import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL='http://localhost:4000/api/usuarios';
  URL2='http://localhost:4000/api';
  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<any>{
    return this.http.get(this.URL);
  }
  eliminarUsuarios(id: string): Observable<any>{
    return this.http.delete(this.URL + id);
  }
  guardarUsuarios(user: Usuarios): Observable<any>{
    return this.http.post(this.URL, user);
  }
  obtenerUsuarios(id: string): Observable<any>{
    return this.http.get(this.URL + id);
  }
  editarUsuarios(id: string, user: Usuarios): Observable<any>{
    return this.http.put(this.URL+id, user);
  }
  consultarUsuarios(nombre: string): Observable<any>{
    return this.http.get(this.URL + nombre);
  }
  iniciarSesion(user: any){
    return this.http.post<any>(this.URL2 + '/usuarios', user);
  }
}
