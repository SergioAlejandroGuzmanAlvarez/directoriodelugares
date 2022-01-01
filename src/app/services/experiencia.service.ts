import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../models/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL='http://localhost:4000/api/experiencias/';
  constructor(private http: HttpClient) { }
  getExperiencia(): Observable<any>{
    return this.http.get(this.URL);
  }
  eliminarExperiencia(id: string): Observable<any>{
    return this.http.delete(this.URL + id);
  }
  guardarExperiencia(exper: Experiencias): Observable<any>{
    return this.http.post(this.URL, exper);
  }
  obtenerExperiencia(id: string): Observable<any>{
    return this.http.get(this.URL + id);
  }
  editarExperiencia(id: string, exper: Experiencias): Observable<any>{
    return this.http.put(this.URL+id, exper);
  }
  consultarExperiencia(nombre: string): Observable<any>{
    return this.http.get(this.URL + nombre);
  }
}
