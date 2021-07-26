import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
   private http: HttpClient
  ) { }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios/')
  }

  post(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios', usuario)
  }

  put(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuarios', usuario)
  }

  delete(id: number){
  return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }

}
