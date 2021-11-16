import { Injectable } from '@angular/core';
import { Empresa } from './empresa';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private url="http://localhost:8080/Empresas/api/empresa";
  constructor(private http: HttpClient) { }

  getEmpresa():Observable<Empresa>
  {
    return this.http.get<Empresa>(this.url);
  }
}
