import { Departamento } from './../shared/model/Departamento.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {

  api: string = 'http://localhost:8080/api/departamentos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public listarDepartamento(): Observable<Departamento[]> {

    return this.httpClient.get<Departamento[]>(this.api);

  }

  public apagarDepartamento(id: number): Observable<void>{

    return this.httpClient.delete<void>(this.api+'/'+id);

  }

  public salvar(departamento : Departamento): Observable<void>{

    return this.httpClient.post<void>(this.api, departamento, this.httpOptions);
  }
}
