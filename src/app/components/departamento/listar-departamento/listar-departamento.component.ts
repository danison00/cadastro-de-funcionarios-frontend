import { Observable } from 'rxjs';
import { Departamento } from './../../../shared/model/Departamento.model';
import { DepartamentoService } from './../../../service/departamento.service';
import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.scss'],
})
export class ListarDepartamentoComponent implements OnInit {
  constructor(public service: DepartamentoService) {}

  departamentos: Departamento[];

  public message: string;
  public fail: boolean = false;
  public mostrarAlert: boolean = false;

  ngOnInit(): void {
    this.listarDepartamentos();
  }

  public listarDepartamentos(): void {
    this.service.listarDepartamento().subscribe({
      next: (departamentos: Departamento[]) => {
        this.departamentos = departamentos;

      },
      error: (response) => {

        console.log(response.message);
        this.fail=true
      }
    });
  }

  public onEditar(id: number): void {
    alert('eu sou o alert editar' + id);
  }
  public onDeletar(id: number): void {
    this.service.apagarDepartamento(id).subscribe({
      next: () => {

        this.a('Excluído com sucesso!');

        this.listarDepartamentos();
      },

      error: (errorResponse) => {
         this.a(errorResponse.error.message);
         this.fail = true;

      }
    });
  }
  public closeAlert(): void {
    this.mostrarAlert = false;
  }
  public a(message: string): void {

    this.message = message;
    this.mostrarAlert = true;
    setTimeout(()=>{this.mostrarAlert=false; this.fail=false}, 3500);
  }
}
