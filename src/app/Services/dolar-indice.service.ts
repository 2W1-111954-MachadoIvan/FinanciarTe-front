import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarIndiceService {

  headers = new HttpHeaders({
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  });

  private baseUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  GetHistoricoDolarIndice() : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}Dolar/getHistoricoDolarIndice`, { headers: this.headers});
  }

  GetUltimoDolarIndice() : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}Dolar/getUltimoDolarIndice`, { headers: this.headers});
  }
  
}
