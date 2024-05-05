import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  CreateAtividade(atividade: Atividade): Observable<string> {
    console.log('CreateAtividade:');
    console.log(atividade);
    const json = JSON.stringify(atividade);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    // };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain; charset=utf-8',
      }),
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log('json');
    const aa = 'aa';
    return this.http.post<string>(this.apiUrl, JSON.stringify(atividade), {
      headers: headers,
    });
  }
}
