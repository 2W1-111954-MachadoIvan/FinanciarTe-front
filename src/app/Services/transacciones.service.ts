import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ResultadoBase } from '../Models/resultado-base';
import { ComandoTransaccion, DTOTransacciones, Transacciones } from '../Models/transacciones';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  headers = new HttpHeaders({
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  });

  private baseUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  GetTransacciones() : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}Transacciones/getTransacciones`, { headers: this.headers});
  }

  PostTransaccion(transaccion: ComandoTransaccion) : Observable<ResultadoBase> {
    return this.httpClient.post<ResultadoBase>(`${this.baseUrl}Transacciones/registrarTransaccion`, transaccion, { headers: this.headers});
  }

  GetTransaccionByID(id: number) : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}Transacciones/getTransaccionById/`+id, { headers: this.headers});
  }

  GetCategorias() : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}Categoria/getCategoriasForComboBox`, { headers: this.headers});
  }

  GetEntidadFinanciera() : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}EntidadesFinancieras/getEntFinForComboBox`, { headers: this.headers});
  }

}
