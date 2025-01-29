import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:4200/api'; 

  constructor(private http: HttpClient) {}

  registrarUsuario(nombre: string, cedula: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro`, { nombre, cedula });
  }

  obtenerRanking(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ranking`);
  }
  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }
  
}
