import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atividade } from '../models/atividade';

@Injectable({
  providedIn: 'root',
})
export class AtividadesService {
  private apiUrl = `${environment.Api_Url}/atividades`;
  constructor(private http: HttpClient) {}

  getAtividades(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.apiUrl);
  }
}
