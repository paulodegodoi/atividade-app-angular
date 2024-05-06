import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atividade } from '../models/atividade';

@Injectable({
  providedIn: 'root',
})
export class AtividadesService {
  private apiUrl = `${environment.Api_Url}/atividades`;
  constructor(private http: HttpClient) {}

  GetAtividades(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.apiUrl);
  }

  CreateAtividade(atividade: Atividade): Observable<Atividade> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Atividade>(this.apiUrl, JSON.stringify(atividade), {
      headers: headers,
    });
  }

  DeleteAtividade(id: number): Observable<void> {
    console.log('id: ' + id);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
