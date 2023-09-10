import { Observable } from 'rxjs';
import { Departamento } from './../../../shared/model/Departamento.model';
import { DepartamentoService } from './../../../service/departamento.service';
import { Component, OnInit } from '@angular/core';

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
  timeoutId: any;

  ngOnInit(): void {
    this.listarDepartamentos();
  }

  public listarDepartamentos(): void {
    this.service.listarDepartamento().subscribe({
      next: (departamentos: Departamento[]) => {
        this.departamentos = departamentos;
      },
      error: (response) => {
        this.showMessageAlert(response.error.message, true);
        this.departamentos = [];
      },
    });
  }

  public onEditar(id: number): void {
    alert('eu sou o alert editar' + id);
  }

  public onDeletar(id: number): void {
    this.service.apagarDepartamento(id).subscribe({
      next: () => {
        this.showMessageAlert('Excluído com sucesso!', false);

        this.listarDepartamentos();
      },

      error: (errorResponse) => {
        this.showMessageAlert(errorResponse.error.message, true);
      },
    });
  }

  public closeAlert(): void {
    this.mostrarAlert = false;
  }
  public showMessageAlert(message: string, fail: boolean): void {

    this.mostrarAlert = false;
    setTimeout(()=>{
      this.mostrarAlert = true;
      this.fail = fail;
      this.message = message;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {this.mostrarAlert = false;}, 3800);

    }, 1)

  }
}
