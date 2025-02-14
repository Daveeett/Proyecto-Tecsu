import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';
import { Login } from '../interfaces/login';
import { Ranking } from '../interfaces/ranking';
import { guardarpuntos } from '../interfaces/guardarpuntos';
import { ResponseApi } from '../interfaces/responseApi';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5269/api/User'; 

  constructor(private http: HttpClient) {}

  createUser(user: Usuario): Observable<ResponseApi<Usuario>> {
    return this.http.post<ResponseApi<Usuario>>(`${this.baseUrl}/CreateUser`, user);
  }

  login(credenciales: Login): Observable<ResponseApi<Login>> {
    return this.http.post<ResponseApi<Login>>(`${this.baseUrl}/Login`, credenciales);
  }

  obtenerRanking(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetRanking`);
  }

  guardarPuntos(puntos: guardarpuntos): Observable<ResponseApi<any>> {
    return this.http.post<ResponseApi<any>>(`${this.baseUrl}/SavePoints`, puntos);
  }
  
}
