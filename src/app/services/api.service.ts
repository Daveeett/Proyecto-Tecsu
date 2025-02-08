import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Login } from '../interfaces/login';
import { Ranking } from '../interfaces/ranking';
import { guardarpuntos } from '../interfaces/guardarpuntos';
import { ResponseApi } from '../interfaces/responseApi';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:7279/api/User'; 

  constructor(private http: HttpClient) {}

  createUser(user: Usuario): Observable<ResponseApi<Usuario>> {
    return this.http.post<ResponseApi<Usuario>>(`${this.baseUrl}/CreateUser`, user);
  }

  login(credenciales: Login): Observable<ResponseApi<Login>> {
    return this.http.post<ResponseApi<Login>>(`${this.baseUrl}/Login`, { credenciales });
  }

  obtenerRanking(): Observable<ResponseApi<Ranking[]>> {
    return this.http.get<ResponseApi<Ranking[]>>(`${this.baseUrl}/GetRanking`);
  }
  
  guardarPuntos(puntos: guardarpuntos): Observable<ResponseApi<any>> {
    return this.http.post<ResponseApi<any>>(`${this.baseUrl}/SavePoints`, puntos);
  }
  
}
